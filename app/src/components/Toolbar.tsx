import ThemeToggle from "./ThemeToggle";

export default function Toolbar(): JSX.Element {
	return (
		<>
			<div className="flex">
				<h1>TITLE</h1>
				<div className="p-2 ml-auto">
					<ThemeToggle/>
				</div>
			</div>
		</>
	);
}
