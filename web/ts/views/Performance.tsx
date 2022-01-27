/* eslint @typescript-eslint/no-explicit-any: off */
import Photon from "photoncss";
import { Card, CardTitle, Col, Container, Icon, Row, Spinner, Toolbar, ToolbarActions, ToolbarTitle, VHCenter } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

import {
  Chart,
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  Layer, Animate, Transform, Handlers,
  DropShadow, Gradient
} from 'rumble-charts';

export const route = "/performance";
export const title = "Server Performance";

export function PerformanceMonitor(): JSX.Element | null {

	// Initialize default state
	const [ state, setState ] = useState<API.RequestData>({ success: false });

	// Resolve method
	const resolve = (): any => fetch("https://joshmerlino.me/api/v2/request-data").then(resp => resp.json())
		.then(setState)
		.catch(() => setTimeout(resolve, 1000));

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

	if (state.success === false) return (
		<VHCenter>
			<Spinner/>
		</VHCenter>
	);

	const series = {
		data: state.history!.map((y, x) => ({ x, y }))
	}

	console.log(series);

	return (
		<Container>
			<Row>

				<Col sm={12} md={6} xl={4}>
					<Card>
						<CardTitle>API Requests</CardTitle>
						<Chart
							height={150}
							width={600}
							minY={0}
							series={[series]}>
							<Lines/>
						</Chart>
					</Card>
				</Col>

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
