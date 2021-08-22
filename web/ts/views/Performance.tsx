import React, { useEffect, useState } from "react";
import { Container, Icon, Row, Toolbar, ToolbarTitle, ToolbarActions, InputField, VHCenter, Spinner } from "photoncss/lib/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Masonry from "react-masonry-component";
import Photon from "photoncss";
import Performance from "../components/Performance";
import qs from "qs";

export const route = "/performance";
export const title = "Server Performance";

export function PerformanceMonitor(): JSX.Element | null {

	// Initialize default state
	const [ apiResponse, setApiResponse ] = useState<IPerformance>({ success: false });
	const [ node, setNode ] = useState(qs.parse(location.search.split("?")[1]).node || "jnode0");

	// Resolve method
	const resolve = () => fetch("https://joshm.us.to/api/v2/performance").then(resp => resp.json())
		.then(setApiResponse);

	// Set resolve on interval
	useEffect(function() {
		let __refresh = true;
		(function refresh() {
			if (__refresh) resolve().finally(refresh);
		}());
		return function() {
			__refresh = false;
		};
	}, []);

	if (apiResponse.success === false) return (
		<VHCenter>
			<Spinner/>
		</VHCenter>
	);

	const state = (apiResponse.nodes.filter(n => n.name.toLowerCase() === node)[0] || apiResponse.nodes[0]).stats;

	return (
		<Container>
			<Row>

				<br/><br/><br/><br/>

				<div style={{ margin: -8 }}>
					<InputField
						id="node-select"
						variant="outlined"
						value={node}
						dropdown={apiResponse.nodes.map(node => node.name)}
						onChange={ () => {
							window.history.pushState(null, "", `${location.pathname}?node=${$("#node-select").val()}`);
							setNode($("#node-select").val() as string);
						} }>Select Node</InputField>
				</div>

				<h3 style={{ margin: 4, marginBottom: 16, fontFamily: "Roboto" }}>Uptime: <span className="badge">{state.os.uptime_formatted}</span></h3>

				<Masonry>

					<Performance
					  color="blue"
					  title="CPU"
					  subtitle={state.cpu.model}
					  properties={[
							[ "Core Temp", `${state.cpu.temp} °C` ],
							[ "Current Speed", `${state.cpu.speed} GHz` ],
							null,
							[ "Cores", state.cpu.cores ],
							[ "Maximum Speed", `${state.cpu.speedmax} GHz` ],
							[ "Minimum Speed", `${state.cpu.speedmin} GHz` ]
					  ]}
					  value={state.cpu.usage}/>

					<Performance
					  color="purple"
					  title="Memory"
					  properties={[
							[ "Used Memory", state.mem.used_formatted ],
							[ "Installed Memory", state.mem.total_formatted ],
							[ "Slots Used", state.mem.layout.length ],
							[ "Generation", state.mem.layout[0].type ],
							[ "Clock Speed", `${state.mem.layout[0].clockSpeed} MHz` ]
					  ]}
					  value={state.mem.usage}/>

					<Performance
					  color="pink"
					  title="Memory Swap"
					  properties={[
							[ "Used Swap", state.mem.swapused_formatted ],
							[ "Total Swap", state.mem.swaptotal_formatted ]
					  ]}
					  value={state.mem.swapusage}/>

					{ state.storage.drives.map((drive, key: number) => <Performance
						  key={key}
  						  color="green"
  						  title="Storage"
  						  subtitle={drive.name}
  						  properties={[
  								[ "Used Storage", drive.used_formatted ],
  								[ "Total Storage", drive.size_formatted ],
  								null,
  								[ "Manufacturer", drive.vendor ],
  								[ "Storage Type", drive.type ]
  							  ]}
  						  value={drive.usage}/>) }

					<Performance
					  color="yellow"
					  title="Network"
					  properties={[
							[ "Ping", `${state.network.inet_ping} ms` ],
							[ "Ping (Proxy server)", `${state.network.proxy_ping} ms` ],
							null,
							[ "Connection Type", `${state.network.adapter.type} ${state.network.adapter.duplex} duplex` ],
							[ "Link Speed", state.network.adapter.speed_formatted ],
							null,
							[ "Upload/second", state.network.tx_sec_formatted ],
							[ "Download/second", state.network.rx_sec_formatted ],
							null,
							[ "Upload", state.network.tx_bytes_formatted ],
							[ "Download", state.network.rx_bytes_formatted ]
					  ]}
					  value={state.network.usage}/>

					<Performance
					  title="Software"
					  properties={[
							[ "Kernel Version", `${state.os.platform} ${state.os.kernel}` ],
							[ "Distro", `${state.os.distro} ${state.os.release}` ],
							[ "Code Name", state.os.codename ],
							null,
							...Object.keys(state.os.software).map(software => [ software, state.os.software[software] ] as [ string, string ])
					  ]}/>

  					<Performance
					  title="Hardware Acceleration"
					  properties={[
							[ "Video Memory", state.gpu.vram_formatted ],
							[ "Manufacturer", state.gpu.vendor ],
							[ "Model", state.gpu.model ]
						]}/>

				</Masonry>
			</Row>
		</Container>
	);
}

export default function View(): JSX.Element {

	return (
		<>
			<Toolbar variant="float">
				<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
				<ToolbarTitle>{ title }</ToolbarTitle>
				<ToolbarActions>
					<ThemeSwitcher/>
				</ToolbarActions>
			</Toolbar>
			<PerformanceMonitor/>
		</>
	);
}
