import { Col, Container, Footer, FooterCopyright, Row } from "photoncss/lib/react";
import React, { useEffect, useState } from "react";
import DiscordInvite from "react-discord-invite";
import { Link } from "react-router-dom";

export function MoTD(): JSX.Element | null {

	type State = { motd: string } | null;

	// Initialize state
	const [ state, setState ] = useState<State>(null);

	// Have state sync with server every second while component is mounted
	useEffect(function() {
		if (state === null) fetch("https://api.joshmerlino.me/v1/motd").then(resp => resp.json())
			.then(setState);
	});

	// If loading
	if (state === null) return null;

	// Return motd
	return <p>{ state!.motd }</p>;

}

export default function Component(): JSX.Element {
	return (
		<Footer>
			<Container>
				<Row>
					<Col md={ 6 } lg={ 4 }>
						<Link to="/">
							<div className="title">
								<h3>Josh Merlino</h3>
							</div>
						</Link>
						<MoTD/>
					</Col>
					<Col md={ 6 } lg={ 4 }>
						<div className="title">
							<h3>Other Platforms</h3>
						</div>
						<ul style={ { color: "inherit", margin: "8px 32px", lineHeight: 1.5 } }>
							<li><a target="_blank" href="//dev.to/joshmerlino" rel="noreferrer">Dev Community</a></li>
							<li><a target="_blank" href="//discord.gg/CCsRghE5" rel="noreferrer">Discord</a></li>
							<li><a target="_blank" href="//github.com/JoshMerlino" rel="noreferrer">GitHub</a></li>
							<li><a target="_blank" href="//npmjs.com/~jmer05" rel="noreferrer">npm</a></li>
							<li><a target="_blank" href="//snapchat.com/add/josh.merlino" rel="noreferrer">Snapchat</a></li>
							<li><a target="_blank" href="//stackoverflow.com/users/7356221" rel="noreferrer">StackOverflow</a></li>
							<li><a target="_blank" href="//twitter.com/josh_merlino" rel="noreferrer">Twitter</a></li>
						</ul>
					</Col>
					<Col xl={ 4 } style={ { textAlign: "right" } }>
						<div style={ { display: "inline-block", margin: "0 -8px", textAlign: "left" } }>
							<DiscordInvite guild="635938104775278602"/>
						</div>
						<a href="//github.com/JoshMerlino/joshmerlino.github.io" style={ { marginTop: 16, display: "inline-block", maxWidth: "calc(100vw - 32px)", overflow: "hidden" } }>
							<img src={ "https://github-readme-stats.vercel.app/api/pin/?username=JoshMerlino&repo=joshmerlino.github.io&theme=radical&bg_color=22272e&border_color=373e47&title_color=58a6ff&icon_color=adbac7&text_color=adbac7" } alt="" className="raised-3"/>
						</a>
					</Col>
				</Row>
			</Container>
			<FooterCopyright>
				<div style={ { paddingLeft: 8 } }>
					Copyright © 2015 - { (new Date).getFullYear() } <a href="//joshmerlino.github.io" className="link">Josh Merlino</a>
					<br/>
					All Rights Reserved
				</div>
			</FooterCopyright>
		</Footer>
	);
}
