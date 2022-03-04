import { ApexOptions } from "apexcharts";
import { Container, Row, Spinner, VHCenter } from "photoncss/lib/react";
import React from "react";
import Chart from "react-apexcharts";
import useFetch from "runtime/util/hooks/useFetch";

export const options: ApexOptions = {
	stroke: {
		curve: "smooth"
	},
	colors: [ "#2e93fa", "#00e396" ],
	yaxis: {
		labels: {
			show: false
		}
	},
	xaxis: {
		labels: {
			show: false
		},
		tooltip: {
			enabled: false
		}
	},
	legend: {
		horizontalAlign: "left",
		position: "top",
		fontSize: "16px",
		fontFamily: "Roboto Condensed",
		labels: {
			colors: "#6e8192"
		}
	},
	tooltip: {
		x: {
			formatter: (val: number) => {
				return `${val} minute${val > 1 ? "s":""} ago`;
			}
		}
	}
};

export default function APIRequestMonitor(): JSX.Element | null {

	// Resolve method
	const [ state, refresh ] = useFetch<API.RequestData>("https://api.joshmerlino.me/v2/request-data");

	// Set resolve on interval
	setTimeout(refresh, 60000);

	if (state === null || state.success === false || !state.history) return (
		<VHCenter>
			<Spinner/>
		</VHCenter>
	);

	const series = [ {
		name: "Requests/second",
		type: "area",
		data: state.history
			.map(obj => obj.req_per_second)
			.map(n => Math.floor(n * 1000) / 1000)
			.map((y, key) => ({
				y,
				x: state.history!.length - key
			}))
	}, {
		name: "Response time (ms)",
		type: "area",
		data: state.history
			.map(obj => obj.response_time)
			.map(n => Math.floor(n * 1000) / 1000)
			.map((y, key) => ({
				y,
				x: state.history!.length - key
			}))
	} ];

	return (
		<Container>
			<Row>

				<br />
				<br />
				<br />
				<br />
				<br />

				<h1>Request Metrics <span style={{ fontSize: "0.675em", verticalAlign: "middle" }}>- past hour</span></h1>
				<div id="wrapper">
					<Chart options={options} series={series} type="line" height={220} />

				</div>

			</Row>
		</Container>
	);
}
