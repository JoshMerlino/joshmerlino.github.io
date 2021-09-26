import React from "react";
import { Container, Row, Col, Card } from "photoncss/lib/react";
import Marquee from "react-fast-marquee";
import HomeMain from "../components/Block/HomeMain";
import app from "../src/app";
import MarqueeComponent from "components/MarqueeComponent";

export const route = "/";

function list(items: string[]) {
	items.sort(() => Math.floor(Math.random() * items.length));
	return items.map((src, key, { length }) =>
		<MarqueeComponent key={key} width={1280/length}>
			<div className="floating raised-8" style={{ width: 92, animationDuration: `${Math.random() * 7 + 3}s`, height: 92, borderRadius: "50%", background: "var(--palette_sheet_background)" }}>
				<img style={{ margin: 20, width: 52, height: 52, borderRadius: 8 }} src={app.static(src)} alt=""/>
			</div>
		</MarqueeComponent>
	);
}

export default function View(): JSX.Element {
	return (
		<>
			<HomeMain/>
			<Container>
				<br/><br/>
				<Row>
					<Col lg={4}>
						<article style={{ textAlign: "center" }}>
							<h2>⚡ Fast ⚡</h2>
							<p>My products are fast and reliable. Designed to work on every device from your coffee maker to a NASA supercomputer. All products are designed to work on low-end hardware so you never lose clients because their devices aren&apos;t powerful enough.</p>
						</article>
					</Col>
					<Col lg={4}>
						<article style={{ textAlign: "center" }}>
							<h2>📱 Adaptive 📱</h2>
							<p>Why manage both an app and website when they can both be the same product. Progressive web apps are websites that look and feel like an app on a mobile device. They can also be installed to the home screen just like it came from the app store.</p>
						</article>
					</Col>
					<Col lg={4}>
						<article style={{ textAlign: "center" }}>
							<h2>😎 Modern 😎</h2>
							<p>Not only are all my products completly themeable, they follow a design specification known as &quot;Material Design&quot;. Designed by Google back in 2015, Material Design is the final iteration for design language, always being modern and intuitive.</p>
						</article>
					</Col>
				</Row>

				<br/><hr/><br/>

				<Row>
					<Col lg={6}>
						<article>
							<h1>Front-end design</h1>
							<p>I design user interfaces to be fast, adaptive and modern. Every website is different however their all crafted to the same high quality standards.</p>
						</article>

					</Col>

					<Col>
						<Marquee style={{ margin: "16px 8px" }} speed={32}>
							{list([
								"stack/webpack.svg",
								"stack/html.svg",
								"stack/babel.svg",
								"stack/javascript.svg",
								"stack/typescript.svg",
								"stack/react.svg",
								"stack/jquery.svg",
								"stack/photon.png",
								"stack/less.svg",
								"stack/git.svg",
								"stack/npm.svg",
								"stack/css3.svg"
							])}
						</Marquee>
						<br/><hr/><br/>
					</Col>

					<Col lg={6}></Col>
					<Col lg={6}>
						<article style={{ textAlign: "right" }}>
							<h1>Back-end infrastructure</h1>
							<p>Be assured that the infrastructure powering your app is resilient and fail resistant. The last thing you want is your infrastructure to fail. Failed infrastructure can lead to catastrophic loss in revenue. So don&apos;t let that happen.</p>
						</article>
					</Col>

					<Col>
						<Marquee style={{ margin: "16px 8px" }} speed={32} direction="right">
							{list([
								"stack/ubuntu.svg",
								"stack/babel.svg",
								"stack/express.svg",
								"stack/javascript.svg",
								"stack/typescript.svg",
								"stack/linux.svg",
								"stack/stripe.svg",
								"stack/mysql.svg",
								"stack/npm.svg",
								"stack/node.svg"
							])}
						</Marquee>
						<br/><hr/><br/>
					</Col>

					<Col lg={6}>
						<article>
							<h1>Tools</h1>
							<p>The programs and services that I use every day to make these products.</p>
						</article>
					</Col>

					<Col>
						<Marquee style={{ margin: "16px 8px" }} speed={48}>
							{list([
								"stack/github.svg",
								"stack/docker.svg",
								"stack/photoshop.svg",
								"stack/vscode.svg",
								"stack/atom.svg",
								"stack/firefox.svg",
								"stack/chrome-dev.svg",
								"stack/git.svg",
								"stack/eslint.svg",
								"stack/gitkraken.svg"
							])}
						</Marquee>
					</Col>

				</Row>
			</Container>
		</>
	);
}
