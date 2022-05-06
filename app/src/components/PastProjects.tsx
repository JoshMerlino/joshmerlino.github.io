import Marquee from "react-fast-marquee";
import PortfolioEntry from "./PortfolioEntry";

export default function PastProjects(): JSX.Element {
	return (
		<>
			<div className="mx-auto flex sm:max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4] pt-8">
				<h1 className="text-3xl font-unisans tracking-widest border-b-2 border-b-[#1976d4] pb-2 dark:text-white">Past Projects</h1>
			</div>
			<div className="mx-auto flex sm:max-w-full md:max-w-[80%] max-w-[90%] w-[1280px] px-12 z-[4]">
				<p className="pb-8 pt-2 text-lg dark:text-gray-400">Just a few of my favorite projects.</p>
			</div>
			<Marquee className="w-full flex overflow-hidden py-16" gradient={ false }>
				<PortfolioEntry
					title="SHS Games"
					icon="https://shsgames.github.io/icon.png"
					description="Unblocked games • part of an inside job."
					url="https://shsgames.github.io"/>
				<PortfolioEntry
					title="SHS Swim & Dive"
					icon="https://sdcswimdive.org/static/5ad4b60399fc1eb544854b8d4fefbcc5.png"
					description="Sports Team Site"
					url="https://sdcswimdive.org"/>
				<PortfolioEntry
					title="chmod Calculator"
					icon="https://joshmerlino.github.io/chmod-calculator/favicon.svg"
					description="Calculate permission octets for Unix systems."
					url="https://joshmerlino.github.io/chmod-calculator/"/>
				<PortfolioEntry
					title="WRDL"
					icon="https://wrdl.us.to/favicon.svg"
					description="Wordle clone that allows you to continue practing."
					url="https://wrdl.us.to"/>
				<PortfolioEntry
					title="Advice Generator"
					icon="https://joshmerlino.github.io/FrontendMentor-advice-generator-app-HJVS9V3N5/icon-dice.svg"
					description="Challange I completed from Frontend Mentor."
					url="https://joshmerlino.github.io/FrontendMentor-advice-generator-app-HJVS9V3N5/"/>
				<PortfolioEntry
					title="Insomnia Viewer"
					icon="https://api.joshmerlino.me/docs/icon.png"
					description="A frontend to view Insomnia.rest config files on the web."
					url="https://api.joshmerlino.me/docs/"/>
				<PortfolioEntry
					title="Codeprint Clone"
					icon="https://codeprint.us.to/icon.png"
					description="Generate screenshots for your code."
					url="https://codeprint.us.to/"/>
			</Marquee>
		</>
	);
}
