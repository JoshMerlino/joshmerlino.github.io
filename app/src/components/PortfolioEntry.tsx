import Marquee from "react-fast-marquee";

export type PortfolioEntryProps = {
    title: string;
    icon: string;
    description: string;
    tags?: React.ReactNode[];
	url?: string;
};

export default function PortfolioEntry({ title, icon, description, tags = [], url }: PortfolioEntryProps): JSX.Element {

	function click() {
		if (url) window.open(url);
	}

	return (
		<span className="flex-1">
			<div className="animation-card px-4" style={ { animationDuration: `${5 + Math.floor(Math.random() * 5)}s` } }>
				<div className="bg-white shadow-xl rounded-2xl w-[368px] mx-auto p-4 cursor-pointer dark:bg-zinc-700" onClick={ click }>
					<div className="flex">
						<img src={ icon } alt={ title } className="w-24 h-24" />
						<div className="w-[220px] ml-4 grow">
							{ title.length > 12 ? <Marquee gradient={ false }>
								<h1 className="font-unisans tracking-wide text-2xl pr-8 dark:text-white">{ title }</h1>
							</Marquee> : <h1 className="font-unisans tracking-wide text-2xl dark:text-white">{ title }</h1> }

							<p className="font-roboto text-neutral-800 dark:text-gray-300">{ description } </p>
						</div>
					</div>
					{ tags.length > 0 && <>
						<hr className="-mx-4" />
						<div className="-mb-4 py-2 px-4">{ tags }</div>
					</> }
				</div>
			</div>
		</span>
	);
}
