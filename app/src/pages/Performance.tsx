import { useEffect, useState } from "react";
import APIRequestMonitor from "../components/APIRequestMonitor";
import PerformanceMonitor from "../components/PerformanceMonitor";
import Toolbar from "../components/Toolbar";

export const path = "/performance";

export default function PerformancePage() {

	const [ minHeight, setMinHeight ] = useState(0);
	useEffect(function() {
		let isMounted = true;
		(function frame() {
			if (isMounted) requestAnimationFrame(frame);
			const height = window.innerHeight - document.getElementById("footer")!.clientHeight + 200;
			if (height !== minHeight) setMinHeight(height);
		}());
		return function() {
			isMounted = false;
		};
	});

	return (
		<div className="bg-gray-200 dark:bg-zinc-800 w-full pb-[200px] -mb-[200px]" style={ { minHeight } }>
			<div className="sticky top-0 min-h-16 left-0 w-full bg-header shadow-md z-[8]">
				<Toolbar>Server Performance</Toolbar>
			</div>
			<div className="mx-auto flex flex-col max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] py-8 lg:py-16">
				<div>
					<APIRequestMonitor/>
					<PerformanceMonitor hostname="http://joshmerlino.me:8310"/>
					<PerformanceMonitor hostname="http://joshmerlino.me:8311"/>
				</div>
			</div>
		</div>
	);
}
