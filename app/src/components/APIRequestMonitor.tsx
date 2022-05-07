import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

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
	chart: {
		toolbar: {
			tools: {
				pan: false,
				download: false,
				zoom: false,
				reset: false,
				zoomin: false,
				zoomout: false
			}
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
				return `${60 - val} minute${60 - val > 1 ? "s":""} ago`;
			}
		}
	}
};

export default function APIRequestMonitor(): JSX.Element | null {

	// Resolve method
	const [ state, setState ] = useState<API.RequestData | null>(null);

	let mounted = false;
	useEffect(function() {
		mounted = true;
		return () => {
			mounted = false;
		};
	}, []);

	useEffect(function refetch() {
		fetch("https://api.joshmerlino.me/v2/request-data")
			.then(resp => resp.json())
			.then(setState)
			.then(() => setTimeout(() => mounted && refetch(), 5000));
	}, []);

	if (state === null || state.success === false || !state.history) return null;

	const series = [ {
		name: "Requests/second",
		type: "area",
		data: state.history
			.map(obj => obj.req_per_second)
			.map(n => Math.floor(n * 1000) / 1000)
			.map((y, key) => ({
				y,
				x: key
			}))
	}, {
		name: "Response time (ms)",
		type: "area",
		data: state.history
			.map(obj => obj.response_time)
			.map(n => Math.floor(n * 1000) / 1000)
			.map((y, key) => ({
				y,
				x: key
			}))
	} ];

	return (
		<div className="bg-white dark:bg-zinc-700 w-full rounded-2xl overflow-hidden my-4 pr-3 py-2 shadow-md">
			<Chart options={ options } series={ series } type="line" height={ 220 } />
		</div>
	);
}
