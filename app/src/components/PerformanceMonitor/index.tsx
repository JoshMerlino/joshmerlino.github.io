import React, { MouseEventHandler, useEffect, useState } from "react";
import Pane from "./Pane";

export type Props = { hostname: string };
export default function PerformanceMonitor({ hostname }: Props): JSX.Element {

	const [ active, setActiveId ] = useState("");
	const setPane = (id: string) => setActiveId(id);
	const [ state, setState ] = useState<Performance.State | null>(null);

	useEffect(function refetch() {
		fetch(hostname + "/api/v3/performance")
			.then(resp => resp.json())
			.then(setState)
			.then(() => setTimeout(refetch, 1000));
	}, []);

	console.log(state);

	return (
		<div className="bg-gray-100 w-full flex rounded-2xl overflow-hidden">
			<div className="ml-[240px] bg-white grow relative h-[586px] relative">
				{ Object.values(state?.sections || {}).map((section, key) => <Pane key={ key } onClick={ () => setPane(section.title) } active={ active === section.title || key === 0 && active === "" } state={ section }/>) }
			</div>
		</div>
	);
}
