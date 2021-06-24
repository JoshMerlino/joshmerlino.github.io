import React from "react";

export default function Repository(repo: IRepository): JSX.Element {
	return (
		<a href={repo.html_url} style={{ margin: 8 }}>
			<img
		  		src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.owner.login}&repo=${repo.name}`} alt=""/>
		</a>
	);
}
