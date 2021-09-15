/* eslint camelcase: off */
import dayjs from "dayjs";
import { Card, CardSubheader } from "photoncss/lib/components/Card";
import React from "react";
import Markdown from "./Markdown";

export default function Definition({ definition, example, author, written_on, thumbs_up, thumbs_down }: IUrbanDefinition): JSX.Element {

	function parse(str: string): string {
		return [ str.split("[")[0],
			...str
				.split("[")
				.slice(1)
				.map(section => {
					const [ link, rest ] = section.split("]");
					return [ `[${link}](${location.origin}${location.pathname}?q=${encodeURIComponent(link)})`, rest ].join("");
				})
		].join("");
	}

	const timestamp = new Date(written_on).getTime();

	return (
		<Card>
			<CardSubheader>Definition</CardSubheader>
			<Markdown>{ parse(definition) }</Markdown>
			<hr/>
			<CardSubheader>Example</CardSubheader>
			<Markdown>{ parse(example) }</Markdown>
			<hr/>
			<p>
				<span>{author} • { dayjs(timestamp).format("MM/DD/YYYY") }</span>
				<span style={{ float: "right" }}>{thumbs_up} 👍 • {thumbs_down} 👎</span>
			</p>
		</Card>
	);
}
