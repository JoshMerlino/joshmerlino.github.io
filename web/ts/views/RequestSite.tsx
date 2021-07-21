import Photon from "photoncss";
import { Icon, Toolbar, ToolbarTitle, ToolbarActions, Container } from "photoncss/lib/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import React from "react";

export const title = "Request a Site";
export const route = "/request-site";

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

			<br/><br/><br/><br/>

			<Container>

				<iframe
				  src="https://docs.google.com/forms/d/e/1FAIpQLScHRHVAYTXpQz9Oc2sKls3_jL8eFFnlvPQw1fQeivbEszt1Aw/viewform?embedded=true"
				  width="640"
				  height="1140"
				  frameBorder={0}
				  marginHeight={0}
				  marginWidth={0}
				  style={{ margin: "0 auto", display: "block" }}>Loading…</iframe>

			</Container>

		</>
	);
}
