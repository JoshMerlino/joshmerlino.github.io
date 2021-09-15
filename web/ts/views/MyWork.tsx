import Photon from "photoncss";
import { Icon, Toolbar, ToolbarTitle, ToolbarActions, Container, Col, Row } from "photoncss/lib/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import React, { useEffect, useState } from "react";
import Repository from "../components/Repository";
import Masonry from "react-masonry-component";

export const title = "My Work";
export const route = "/my-work";

export default function View(): JSX.Element {

	const [ repos, setRepos ] = useState<IRepository[]>([]);
	useEffect(function() {
		fetch("https://joshm.us.to/api/v1/repos")
			.then(resp => resp.json())
			.then(setRepos);
	}, []);

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

					<Col lg={4} xl={3}>
						<h1>Code Stats</h1>
						<img style={{ margin: 8, width: "calc(100% - 16px)" }} src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoshMerlino&layout=compact&title_color=191919&langs_count=24" alt=""/>
					</Col>

					<Col lg={8} xl={9}>
						<h1>Templates</h1>
						<Masonry options={{ transitionDuration: 0 }}>
							{
								repos
									.filter(repo => repo.is_template)
									.map((repo, key) => <Repository key={key} {...repo}/>)
							}
						</Masonry>
						<hr/>
						<h1>npm Packages</h1>
						<Masonry options={{ transitionDuration: 0 }}>
							{
								repos
									.filter(repo => repo.homepage?.match(/npmjs/))
									.map((repo, key) => <Repository key={key} {...repo}/>)
							}
						</Masonry>
						<hr/>
						<h1>My Repositorys</h1>
						<Masonry options={{ transitionDuration: 0 }}>
							{
								repos
									.filter(repo => !repo.fork && !repo.archived && !repo.is_template)
									.map((repo, key) => <Repository key={key} {...repo}/>)
							}
						</Masonry>
						<hr/>
						<h1>Forked Repositorys</h1>
						<Masonry options={{ transitionDuration: 0 }}>
							{
								repos
									.filter(repo => repo.fork && !repo.archived)
									.map((repo, key) => <Repository key={key} {...repo}/>)
							}
						</Masonry>
						<hr/>
						<h1>Archived Repositorys</h1>
						<Masonry options={{ transitionDuration: 0 }}>
							{
								repos
									.filter(repo => repo.archived)
									.map((repo, key) => <Repository key={key} {...repo}/>)
							}
						</Masonry>
					</Col>

				</Row>
			</Container>

		</>
	);
}
