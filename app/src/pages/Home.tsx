import { useState } from "react";
import "styles/App.less";

export const path = "/";

export default function App() {
	const [ count, setCount ] = useState(0);

	return (
		<div className="h-screen bg-gray-800 flex-col grid">
			<header className="flex justify-center align-center flex-col overflow-hidden text-center text-white">
				<img src="/favicon.svg" className="App-logo h-[40vmin]  mx-auto w-[40vmin] inline-flex" alt="logo" />
				<p className="text-center text-5xl text-bold mt-16">Hello Vite + React!</p>
				<p>
					<button className="text-black px-2 m-8 border-gray-700 border-[1px] rounded-sm bg-white" type="button" onClick={ () => setCount((count) => count + 1) }>count is: { count }</button>
				</p>
				<p>Edit <code>App.tsx</code> and save to test HMR updates.</p>
				<p className="text-2xl">
					<a
						className="text-sky-500 text-bold"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">Learn React</a>
					{ " | " }
					<a
						className="text-sky-500 text-bold"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer">Vite Docs</a>
				</p>
			</header>
		</div>
	);
}
