import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "styles/main.less";
import "photoncss/dist/photon.css";
import "react-discord-invite/dist/style.css";
import "setimmediate";
import jQuery from "jquery";
import Footer from "./src/components/Footer";
import Drawer from "./src/components/Drawer";

Object.defineProperty(window, "jQuery", { value: jQuery });
Object.defineProperty(window, "$", { value: jQuery });

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export const queryClient = new QueryClient;

export type Page = { default: ElementType, route: string, caseSensitive?: boolean };
const pages = import.meta.globEager<Page>("./src/pages/*.tsx");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={ queryClient }>
				<BrowserRouter>
					<Drawer/>
					<main>
						<Routes>
							{ Object.values(pages).map((page, key) => <Route
								key={ key }
								path={ page.route }
								caseSensitive={ page.caseSensitive || false }
								element={ <page.default/> }/>
							) }
						</Routes>
					</main>
					<Footer/>
				</BrowserRouter>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
