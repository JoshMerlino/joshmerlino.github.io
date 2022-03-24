import { Col, Container, Row } from "photoncss/lib/react";
import React from "react";
import Masonry from "react-masonry-component";
import useFetch from "../util/hooks/useFetch";
import Performance from "./Performance";

export default function ServerPerformanceMonitor(): JSX.Element | null {

	// Resolve method
	const [ state, refresh ] = useFetch<API.Performance>("https://api.joshmerlino.me/v2/performance");

	// Set resolve on interval
	setTimeout(refresh, 1000);

	if (!state || !state.nodes) return null;

	return <Container>
		<Row>
			{ state.nodes.map((node, key) =>
				<Col sm={ 12 } lg={ 4 } key={ key }>

					<h1>{ node.name }</h1>

					<Performance
					  color="blue"
					  title="CPU"
					  subtitle={ node.stats.cpu.model }
					  properties={ [
							[ "Core Temp", `${node.stats.cpu.temp} °C` ],
							[ "Current Speed", `${node.stats.cpu.speed} GHz` ],
							null,
							[ "Cores", node.stats.cpu.cores ],
							[ "Maximum Speed", `${node.stats.cpu.speedmax} GHz` ],
							[ "Minimum Speed", `${node.stats.cpu.speedmin} GHz` ]
					  ] }
					  value={ node.stats.cpu.usage }/>

					<Performance
					  color="purple"
					  title="Memory"
					  properties={ [
							[ "Used Memory", node.stats.mem.used_formatted ],
							[ "Installed Memory", node.stats.mem.total_formatted ],
							[ "Slots Used", node.stats.mem.layout.length ],
							[ "Generation", node.stats.mem.layout[0].type ],
							[ "Clock Speed", `${node.stats.mem.layout[0].clockSpeed} MHz` ]
					  ] }
					  value={ node.stats.mem.usage }/>

					<Performance
					  color="pink"
					  title="Memory Swap"
					  properties={ [
							[ "Used Swap", node.stats.mem.swapused_formatted ],
							[ "Total Swap", node.stats.mem.swaptotal_formatted ]
					  ] }
					  value={ node.stats.mem.swapusage }/>

					{ node.stats.storage.drives.map((drive, key: number) => <Performance
						  key={ key }
  						  color="green"
  						  title="Storage"
  						  subtitle={ drive.name }
  						  properties={ [
  								[ "Used Storage", drive.used_formatted ],
  								[ "Total Storage", drive.size_formatted ],
  								null,
  								[ "Manufacturer", drive.vendor ],
  								[ "Storage Type", drive.type ]
  							  ] }
  						  value={ drive.usage }/>) }

					<Performance
					  color="yellow"
					  title="Network"
					  properties={ [
							[ "Ping", `${node.stats.network.inet_ping} ms` ],
							[ "Ping (Proxy server)", `${node.stats.network.proxy_ping} ms` ],
							null,
							[ "Connection Type", `${node.stats.network.adapter.type} ${node.stats.network.adapter.duplex} duplex` ],
							[ "Link Speed", node.stats.network.adapter.speed_formatted ],
							null,
							[ "Upload/second", node.stats.network.tx_sec_formatted ],
							[ "Download/second", node.stats.network.rx_sec_formatted ],
							null,
							[ "Upload", node.stats.network.tx_bytes_formatted ],
							[ "Download", node.stats.network.rx_bytes_formatted ]
					  ] }
					  value={ node.stats.network.usage }/>

					<Performance
					  title="Software"
					  properties={ [
							[ "Kernel Version", `${node.stats.os.platform} ${node.stats.os.kernel}` ],
							[ "Distro", `${node.stats.os.distro} ${node.stats.os.release}` ],
							[ "Code Name", node.stats.os.codename ],
							null,
							...Object.keys(node.stats.os.software).map(software => [ software, node.stats.os.software[software] ] as [ string, string ])
					  ] }/>

  					<Performance
					  title="Hardware Acceleration"
					  properties={ [
							[ "Video Memory", node.stats.gpu.vram_formatted ],
							[ "Manufacturer", node.stats.gpu.vendor ],
							[ "Model", node.stats.gpu.model ]
						] }/>

				</Col>
			) }
		</Row>
	</Container>;
}
