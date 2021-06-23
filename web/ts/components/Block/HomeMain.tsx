import Photon from "photoncss";
import { Col, Container, Icon, Row, Toolbar, ToolbarActions } from "photoncss/react";
import ThemeSwitcher from "../ThemeSwitcher";
import React, { useEffect } from "react";
import DiscordInvite from "react-discord-invite";
import Avatar from "../Avatar";
import Block from "../Block";

export default function HomeMain(): JSX.Element {

	// Manage toolbar location
	useEffect(function() {
		const iv = setInterval(function(){
			if ($(document).scrollTop()! < $("#home-main-block").height()! + 65) {
				$("#home-main-block").children(".photon-toolbar")
					.removeClass("variant-raised fixed");
			} else {
				$("#home-main-block").children(".photon-toolbar")
					.addClass("variant-raised fixed");
			}
		});
		return () => clearInterval(iv);
	});

	return (
		<Block style={{ background: "#191919", color: "#fafafa", padding: "64px 0" }} id="home-main-block">
			<Container>
				<Row>
					<Col md={4} lg={3} style={{ textAlign: "center" }}>
						<Avatar/>
					</Col>
					<Col sm={1}/>
					<Col sm={12} md={8} lg={9} style={{ padding: "0px 8px" }}>
						<div className="title">
							<h3>{ APP_MANIFEST.name }</h3>
						</div>
						<h3 style={{ color: "inherit" }}>{ APP_MANIFEST.description }</h3>
						<div className="DiscordInvite-wrapper">
							<div className="raised-3" style={{ display: "inline-block" }}>
								<DiscordInvite guild="635938104775278602"/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Toolbar variant="flat">
				<Icon onClick={ () => Photon.Drawer("#drawer").open() }>menu</Icon>
				<ToolbarActions>
					<ThemeSwitcher/>
				</ToolbarActions>
			</Toolbar>
		</Block>
	);

}
