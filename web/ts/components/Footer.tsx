import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, FooterCopyright, Container, Row, Col } from "photoncss/react";
import DiscordInvite from "react-discord-invite";

export function MoTD(): JSX.Element | null {

	type State = { motd: string } | null;

	// Initialize state
	const [ state, setState ] = useState<State>(null);

	// Have state sync with server every second while component is mounted
	useEffect(function() {
		if (state === null) fetch("https://joshm.us.to/api/v1/motd").then(resp => resp.json())
			.then(setState);
	});

	// If loading
	if (state === null) return null;

	// Return motd
	return <p>{state!.motd}</p>;

}

export default function Component(): JSX.Element {
	return (
		<Footer>
			<Container>
				<Row>
					<Col md={6} lg={4}>
						<Link to="/">
							<div className="title">
								<h3>Josh Merlino</h3>
							</div>
						</Link>
						<MoTD/>
					</Col>
					<Col md={6} lg={4}>
						<div className="title">
							<h3>Other Platforms</h3>
						</div>
						<ul style={{ color: "inherit", margin: "8px 32px", lineHeight: 1.5 }}>
							<li><a href="//dev.to/joshmerlino">Dev Community</a></li>
							<li><a href="//github.com/JoshMerlino">GitHub</a></li>
							<li><a href="//npmjs.com/~jmer05">npm</a></li>
							<li><a href="//stackoverflow.com/users/7356221">StackOverflow</a></li>
						</ul>
					</Col>
					<Col xl={4}>
						<div className="raised-3" style={{ display: "inline-block", float: "right" }}>
							<DiscordInvite guild="635938104775278602"/>
						</div>
					</Col>
				</Row>
			</Container>
			<FooterCopyright>
				<div style={{ paddingLeft: 8 }}>
					Copyright © 2015 - { (new Date).getFullYear() } <a href="//joshmerlino.github.io" className="link">Josh Merlino</a>
					<br/>
					All Rights Reserved
				</div>
			</FooterCopyright>
		</Footer>
	);
}
