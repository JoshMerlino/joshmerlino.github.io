import Marquee from "react-fast-marquee";
import Item from "./Item";

export default function FavoriteStack(): JSX.Element {

	const stack = Object.keys(import.meta.globEager("../../public/stack/*")).map(a => `/stack${a.substring(a.lastIndexOf("/"))}`);

	return (
		<>
			<div className="mx-auto flex sm:max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4] pt-8">
				<h1 className="ml-auto text-3xl font-unisans tracking-widest border-b-2 border-b-[#1976d4] pb-2 dark:text-white">Favorite Technologies</h1>
			</div>
			<div className="mx-auto flex sm:max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4]">
				<p className="ml-auto pb-8 pt-2 text-lg dark:text-gray-400">Apps & tools I use every day.</p>
			</div>
			<Marquee className="w-full flex overflow-hidden py-16" gradient={ false }>
				{ stack.map((src, key) => <Item key={ key } src={ `${src}` }/>) }
			</Marquee>
		</>
	);
}
