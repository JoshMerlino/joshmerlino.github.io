/* eslint @typescript-eslint/no-explicit-any: off */
import Photon from "photoncss";
import { Card, CardTitle, Col, Container, Icon, Row, Spinner, Toolbar, ToolbarActions, ToolbarTitle, VHCenter } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import useFetch from "runtime/util/hooks/useFetch";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const route = "/performance";
export const title = "Server Performance";

export function PerformanceMonitor(): JSX.Element | null {

	// Resolve method
	const [ state, refresh ] = useFetch<API.RequestData>("https://api.joshmerlino.me/v2/request-data");

	// Set resolve on interval
	setTimeout(refresh, 60000);

	if (state === null || state.success === false || !state.history) return (
		<VHCenter>
			<Spinner/>
		</VHCenter>
	);

	return (
		<Container>
			<Row>

				<br />
				<br />
				<br />
				<br />
				<br />

				<h2>API Requests / Second</h2>
				<h3>Past hour</h3>
				<div id="wrapper">
					<Chart options={{
						chart: {
							id: "rps",
							group: "social",
							type: "line",
							height: 160
						},
						stroke: {
							curve: "smooth"
						},
						colors: [ "#2e93fa" ]
					} as ApexOptions} series={[ {
						name: "API Requests/second",
						type: "area",
						data: state.history
							.map(obj => obj.req_per_second)
							.map(n => Math.floor(n))
							.map((y, key) => ({
								y,
								x: state.history!.length - key
							}))
					} ]} type="line" height={160} />
					<br/>
					<h2>Average Response Time (ms)</h2>
					<h3>Past hour</h3>
					<Chart options={{
						chart: {
							id: "rt",
							group: "social",
							type: "line",
							height: 160
						},
						stroke: {
							curve: "smooth"
						},
						colors: [ "#00e396" ]
					} as ApexOptions} series={[ {
						name: "API Response Time",
						type: "area",
						data: state.history
							.map(obj => obj.response_time)
							.map(n => Math.floor(n * 1000) / 1000)
							.map((y, key) => ({
								y,
								x: state.history!.length - key
							}))
					} ]} type="line" height={160} />

				</div>

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
