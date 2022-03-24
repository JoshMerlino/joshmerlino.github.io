import Markdown from "markdown-it";

const md = Markdown({
	html: true,
	linkify: true,
	typographer: true
});

export type Props = { children: string };

export default function Component({ children }: Props): JSX.Element {
	return (
		<div className="md-container">
			{ /* <Markdown plugins={ [ gfm ] } source={ children }/> */ }
			<div dangerouslySetInnerHTML={ { __html: md.render(children) } }></div>
		</div>
	);
}
