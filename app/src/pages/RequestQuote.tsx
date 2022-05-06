import { useEffect, useState } from "react";
import Toolbar from "../components/Toolbar";

export const path = "/get-a-quote";

export default function RequestQuote() {

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
				<Toolbar>Get a Quote</Toolbar>
			</div>
			<div className="mt-16">
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOSVnUMaY2i2rHFGVMI9Pjx_IMSLquaiy8jI6hzEKjR7nGSw/viewform?embedded=true" width="640" height="1080" frameBorder="0" marginHeight={ 0 } marginWidth={ 0 } className="mx-auto">Loading…</iframe>
			</div>
		</div>
	);
}
