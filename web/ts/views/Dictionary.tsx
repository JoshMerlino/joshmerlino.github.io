import Definition from "components/Definition";
import Photon from "photoncss";
import { Col, Container, Icon, InputField, Row, Spinner, Toolbar, ToolbarActions, ToolbarTitle, VHCenter } from "photoncss/lib/react";
import qs from "qs";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const title = "Dictionary";
export const route = "/dictionary";

export default function View(): JSX.Element {

	const [ word, setWord ] = useState(qs.parse(location.search.split("?")[1]).q || "");
	const [ def, setDef ] = useState<null | IUrbanDefinition[]>([]);

	useEffect(function() {
		setDef(null);
		if (word === "") return setDef([]);
		fetch(`https://joshm.us.to/api/v2/define?query=${word}`)
			.then(resp => resp.json())
			.then(({ list }) => setDef(list));
	}, [ word ]);

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

				<InputField
					id="word-select"
					variant="outlined"
					value={word}
					onChange={ () => {
						window.history.pushState(null, "", `${location.pathname}?q=${$("#word-select").val()}`);
						setWord($("#word-select").val() as string);
					} }>Search</InputField>

				{
					def === null ? <VHCenter><Spinner/></VHCenter>:<Row>
						{ def.length === 0 ? <Col>
							<h2>Start typing to search a word or phrase.</h2>
						</Col> : <Col lg={8} xl={6}>
							{ def.length > 0 && <h3><span className="badge">{ def.length } results</span></h3> }
							{ def.map((definition, key) => <Definition key={key} {...definition}/>) }
						</Col>}
					</Row>
				}

			</Container>

		</>
	);
}
