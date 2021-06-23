import React from "react";
import { Drawer, ListSubheader } from "photoncss/react";
import app from "../app";
import { DrawerEntry } from "./DrawerEntry";

export default function Component(): JSX.Element {
	return (
		<Drawer id="drawer">
			<img
				src={ app.static("bitmoji/bitmoji-medres.png") }
				alt=""
				style={{
					margin: "1rem auto",
					width: "50%",
					borderRadius: "50%",
					display: "block",
					background: "#00000015"
				}}/>
			<hr/>
			<DrawerEntry icon="home" to="/">Home</DrawerEntry>
			<hr/>
			<ListSubheader>Infrastructure</ListSubheader>
			<DrawerEntry icon="api" to="https://joshm.us.to/docs/" external>API Documentation</DrawerEntry>
			<DrawerEntry icon="memory" to="/performance">Server Performance</DrawerEntry>

		</Drawer>
	);
}
