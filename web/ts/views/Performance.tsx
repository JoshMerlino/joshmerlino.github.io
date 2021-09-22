/* eslint @typescript-eslint/no-explicit-any: off */
import Photon from "photoncss";
import { Container, Icon, InputField, Row, Spinner, Toolbar, ToolbarActions, ToolbarTitle, VHCenter } from "photoncss/lib/react";
import qs from "qs";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-component";
import Performance from "../components/Performance";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const route = "/performance";
export const title = "Server Performance";

export function PerformanceMonitor(): JSX.Element | null {

	// Initialize default state
	const [ apiResponse, setApiResponse ] = useState<IPerformance>({ success: false });
	const [ node, setNode ] = useState(qs.parse(location.search.split("?")[1]).node || "proxy");

	// Resolve method
	const resolve = (): any => fetch("https://joshm.us.to/api/v2/performance").then(resp => resp.json())
		.then(setApiResponse)
		.catch(() => setTimeout(resolve, 5000));

	// Set resolve on interval
	useEffect(function() {
		let __refresh = true;
		(function refresh() {
			if (__refresh) resolve().then(refresh);
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

	const state = apiResponse.nodes.filter(n => n.name.toLowerCase() === node)[0] || apiResponse.nodes[0];
	const { stats } = state;

	return (
		<Container>
			<Row>

				<br/><br/><br/><br/>

				<div className="title" style={{ margin: "8px -4px" }}><h3>Node</h3></div>

				<div style={{ margin: -6 }}>
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

				<h3 style={{ margin: 4, marginBottom: 16, fontFamily: "Roboto" }}>Uptime: <span className="badge">{stats.os.uptime_formatted}</span></h3>

				<Masonry options={{ transitionDuration: 0 }}>

					{ state.name === "proxy" && <Performance
						title="API"
						properties={[
							[ "Requests/second", apiResponse.api.req_per_second.toLocaleString() ],
							[ `Requests (${stats.os.uptime_formatted})`, apiResponse.api.req_counter.toLocaleString() ]
						]}/> }

					<Performance
					  color="blue"
					  title="CPU"
					  subtitle={stats.cpu.model}
					  properties={[
							[ "Core Temp", `${stats.cpu.temp} °C` ],
							[ "Current Speed", `${stats.cpu.speed} GHz` ],
							null,
							[ "Cores", stats.cpu.cores ],
							[ "Maximum Speed", `${stats.cpu.speedmax} GHz` ],
							[ "Minimum Speed", `${stats.cpu.speedmin} GHz` ]
					  ]}
					  value={stats.cpu.usage}/>

					<Performance
					  color="purple"
					  title="Memory"
					  properties={[
							[ "Used Memory", stats.mem.used_formatted ],
							[ "Installed Memory", stats.mem.total_formatted ],
							[ "Slots Used", stats.mem.layout.length ],
							[ "Generation", stats.mem.layout[0].type ],
							[ "Clock Speed", `${stats.mem.layout[0].clockSpeed} MHz` ]
					  ]}
					  value={stats.mem.usage}/>

					<Performance
					  color="pink"
					  title="Memory Swap"
					  properties={[
							[ "Used Swap", stats.mem.swapused_formatted ],
							[ "Total Swap", stats.mem.swaptotal_formatted ]
					  ]}
					  value={stats.mem.swapusage}/>

					{ stats.storage.drives.map((drive, key: number) => <Performance
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
							[ "Ping", `${stats.network.inet_ping} ms` ],
							[ "Ping (Proxy server)", `${stats.network.proxy_ping} ms` ],
							null,
							[ "Connection Type", `${stats.network.adapter.type} ${stats.network.adapter.duplex} duplex` ],
							[ "Link Speed", stats.network.adapter.speed_formatted ],
							null,
							[ "Upload/second", stats.network.tx_sec_formatted ],
							[ "Download/second", stats.network.rx_sec_formatted ],
							null,
							[ "Upload", stats.network.tx_bytes_formatted ],
							[ "Download", stats.network.rx_bytes_formatted ]
					  ]}
					  value={stats.network.usage}/>

					<Performance
					  title="Software"
					  properties={[
							[ "Kernel Version", `${stats.os.platform} ${stats.os.kernel}` ],
							[ "Distro", `${stats.os.distro} ${stats.os.release}` ],
							[ "Code Name", stats.os.codename ],
							null,
							...Object.keys(stats.os.software).map(software => [ software, stats.os.software[software] ] as [ string, string ])
					  ]}/>

  					<Performance
					  title="Hardware Acceleration"
					  properties={[
							[ "Video Memory", stats.gpu.vram_formatted ],
							[ "Manufacturer", stats.gpu.vendor ],
							[ "Model", stats.gpu.model ]
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
