import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
	const stack = Object.keys(import.meta.globEager("../../public/footer-waves/*.svg")).map(a => `/footer-waves${a.substring(a.lastIndexOf("/"))}`);
	const src = stack[Math.floor(stack.length * Math.random())];
	return (
		<footer id="footer">
			<img src={ `${src}` } alt="" />
			<div className="bg-header">
				<div className="mx-auto flex max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4]">
					<div className="py-8">
						<h1 className="text-3xl font-unisans tracking-[10px] border-b-2 border-b-primary pb-2 text-white">Josh Merlino</h1>
						<p className="tracking-wide text-white font-unisans text-xl pt-3 tracking-[2.5px]">{ APP_MANIFEST.description }</p>
					</div>
				</div>
				<div className="w-full text-gray-300 font-medium bg-black/10 h-12 flex justify-center items-center font-manrope">
					<div className="mx-auto flex max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4]">
						Copyright © 2015 - 2022<Link to="/"><span className="text-primary px-1">Josh Merlino</span></Link> - All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
}
