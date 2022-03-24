import { Dispatch, SetStateAction, useEffect, useState } from "react";
import mergeDefaults from "../mergeDefaults";

export type Resolveable<T> = T | null;

export default function useFetch<T>(endpoint: string, args?: RequestInit): [ Resolveable<T>, () => void, Dispatch<SetStateAction<Resolveable<T>>> ] {

	// Initialize state
	const [ state, setState ] = useState<Resolveable<T>>(null);

	// Function to refresh the current state
	function refresh() {
		fetch(endpoint, <RequestInit>mergeDefaults(args, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			}
		}))
			.then(response => response.json())
			.then(response => setState(<T>response));
	}

	// Refresh the state on mount so that it exists
	useEffect(refresh, []);

	// Return state and controls
	return [ state, refresh, setState ];

}
