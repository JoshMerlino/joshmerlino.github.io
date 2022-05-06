import FavoriteStack from "../components/FavoriteStack";
import HomePageBanner from "../components/HomePageBanner";
import PastProjects from "../components/PastProjects";
import Waves from "../components/Waves";

export const path = "/";

export default function Home() {
	return (
		<div className="bg-gray-200 dark:bg-zinc-800 min-h-full w-full">
			<HomePageBanner/>
			<PastProjects/>
			<Waves/>
			<FavoriteStack/>
			<Waves/>
		</div>
	);
}
