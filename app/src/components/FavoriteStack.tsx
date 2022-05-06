import Marquee from "react-fast-marquee";
import Item from "./Item";

export default function FavoriteStack(): JSX.Element {

	const stack = Object.keys(import.meta.globEager("../../public/stack/*")).map(a => `/stack${a.substring(a.lastIndexOf("/"))}`);

	return (
		<>
			<div className="mx-auto flex max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4] pt-8">
				<h1 className="ml-auto text-3xl font-unisans tracking-widest border-b-2 border-b-[#1976d4] pb-2 dark:text-white">Comfort zone</h1>
			</div>
			<Marquee className="w-full flex overflow-hidden py-16" gradient={ false }>
				{ stack.map((src, key) => <Item key={ key } src={ `${src}` }/>) }
			</Marquee>
		</>
	);
}
