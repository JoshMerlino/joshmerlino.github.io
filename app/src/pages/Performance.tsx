import { useEffect, useState } from "react";
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
			<div className="sticky top-0 min-h-16 left-0 w-full bg-header shadow-md">
				<Toolbar>Server Performance</Toolbar>
			</div>

		</div>
	);
}
