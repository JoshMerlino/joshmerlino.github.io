import React from "react";
import { Container, Row, Col } from "photoncss/lib/react";
import HomeMain from "../components/Block/HomeMain";

export const route = "/";

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
							<h1>Font-end design</h1>
							<p>I design user interfaces to be fast, adaptive and modern. Every website is different however their all crafted to the same high quality standards.</p>
						</article>
					</Col>
					<Col lg={6}>
						<article>
							<h1>Back-end infrastructure</h1>
							<p>Be assured that the infrastructure powering your app is resilient and fail resistant. The last thing you want is your infrastructure to fail. Failed infrastructure can lead to catastrophic loss in revenue. So don&apos;t let that happen.</p>
						</article>
					</Col>
				</Row>
			</Container>
		</>
	);
}
