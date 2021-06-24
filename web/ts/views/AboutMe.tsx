/* eslint @typescript-eslint/no-var-requires: off */
import Photon from "photoncss";
import { Container, Icon, Toolbar, ToolbarActions, ToolbarTitle, Row, Col } from "photoncss/react";
import React from "react";
import Markdown from "../components/Markdown";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const title = "About Me";
export const route = "/about";

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
				<Row>
					<Col md={10} lg={8} xl={6}>
						<Markdown>{ require("../../../../README.md").default }</Markdown>
					</Col>
				</Row>
			</Container>

		</>
	);
}
