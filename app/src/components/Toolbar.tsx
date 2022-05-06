import ThemeToggle from "./ThemeToggle";

export default function Toolbar(): JSX.Element {
	return (
		<>
			<div className="flex flex-wrap">
				<h1 className="text-xl text-white font-unisans leading-[4rem] px-4 tracking-[6px] select-none">{ APP_MANIFEST.author }</h1>
				<div className="p-2 ml-auto">
					<ThemeToggle/>
				</div>
			</div>
		</>
	);
}
