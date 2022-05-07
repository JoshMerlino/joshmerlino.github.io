import { useEffect, useState } from "react";
import FavoriteStack from "../components/FavoriteStack";
import HomePageBanner from "../components/HomePageBanner";
import PastProjects from "../components/PastProjects";
import Waves from "../components/Waves";

export const path = "/";

export default function Home() {

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
			<HomePageBanner/>
			<div className="mx-auto flex font-unisans max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4] pt-8 text-neutral-700 dark:text-gray-300 text-2xl">
				<p className="font-2xl">Design Develop Deploy - I provide full solutions from the sketch stage to production. I&apos;ll design your site to be pixel perfect, secure, and fast. Depending on your needs, I can deploy a full stack solution to my own private cloud service.</p>
			</div>
			<Waves/>
			<PastProjects/>
			<Waves/>
			<FavoriteStack/>
		</div>
	);
}
