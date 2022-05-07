import React, { useEffect, useState } from "react";
import Pane from "./Pane";

export type Props = { hostname: string };
export default function PerformanceMonitor({ hostname }: Props): JSX.Element {

	const [ active, setActiveId ] = useState("");
	const setPane = (id: string) => setActiveId(id);
	const [ state, setState ] = useState<Performance.State | null>(null);

	let mounted = false;
	useEffect(function() {
		mounted = true;
		return () => {
			mounted = false;
		};
	}, []);

	useEffect(function refetch() {
		fetch(hostname)
			.then(resp => resp.json())
			.then(setState)
			.then(() => setTimeout(() => mounted && refetch(), 1000));
	}, []);

	return (
		<div className="bg-gray-100 dark:bg-zinc-700/50 w-full flex rounded-2xl overflow-hidden my-4 shadow-md font-[roboto]">
			<div className="ml-[240px] bg-white dark:bg-zinc-700 grow relative h-[586px] relative border-l-[1px] border-neutral-500/20">
				{ Object.values(state?.sections || {}).map((section, key) => <Pane key={ key } onClick={ () => setPane(section.title) } active={ active === section.title || key === 0 && active === "" } state={ section }/>) }
				<div className="absolute w-full grid h-full justify-center items-center dark:text-white select-none pointer-events-none">Failed to connect to server.</div>
			</div>
		</div>
	);
}
