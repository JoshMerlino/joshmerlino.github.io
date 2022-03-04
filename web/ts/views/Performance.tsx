/* eslint @typescript-eslint/no-explicit-any: off */
import APIRequestMonitor from "components/APIRequestMonitor";
import Photon from "photoncss";
import { Icon, Toolbar, ToolbarActions, ToolbarTitle } from "photoncss/lib/react";
import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const route = "/performance";
export const title = "Server Performance";

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
			<APIRequestMonitor/>
		</>
	);
}
