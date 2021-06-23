/* eslint camelcase: off */
declare module "photoncss";
declare module "photoncss/react";

declare module "react-dom";
declare module "react-router-dom";

declare const PRODUCTION: boolean;

declare interface View {
	route: string;
	View: JSX.Element;
	default: JSX.Element;
	title?: string;
}

declare interface AppManifest {
	name: string;
	short_name: string;
	version: string;
	description: string;
	developerName: string;
	developerURL: string;
	background_color: string;
	theme_color: string;
	orientation: string;
	crossorigin: string;
	icons: {
		src: string;
		sizes: number[];
		purpose?: string;
		destination: string;
	}[];
}

declare const APP_MANIFEST: AppManifest;

declare interface App {
	static: (asset: string) => string;
	getRoute: () => string;
	api: (path: string, data: unknown) => Promise<unknown>;
	update: (hash: string) => void;
}

declare interface IPerformanceSuccess {
	success: boolean
	cpu: {
		manufacturer: string
		brand: string
		cores: number
		speed: number
		governor: string
		speedmax: number
		speedmin: number
		model: string
		temp: number
		usage: number
	}
	mem: {
		total: number
		used: number
		swaptotal: number
		swapused: number
		total_formatted: string
		used_formatted: string
		usage: number
		swapusage: number
		swaptotal_formatted: string
		swapused_formatted: string
		layout: {
			size: number
			size_formatted: string
			type: string
			clockSpeed: number
			formFactor: string
		}[]
	}
	storage: {
		drives: {
			device: string
			type: string
			name: string
			vendor: string
			interfaceType: string
			size: number
			size_formatted: string
			used: number
			used_formatted: string
			usage: number
		}[]
		used: number
		used_formatted: string
		total: number
		total_formatted: string
		usage: number
	}
	network: {
		tx_sec: number
		rx_sec: number
		tx_sec_formatted: string
		rx_sec_formatted: string
		tx_bytes: number
		rx_bytes: number
		tx_bytes_formatted: string
		rx_bytes_formatted: string
		inet_ping: number
		proxy_ping: number
		usage: number
		adapter: {
			iface: string
			type: string
			duplex: string
			speed: number
			speed_formatted: string
		}
		requests: {
			req_per_second: number
			req_counter: number
			avg_req_per_second: number
		}
	}
	os: {
		platform: string
		release: string
		distro: string
		codename: string
		kernel: string
		arch: string
		hostname: string
		software: Record<string, string>
		uptime: number
		uptime_formatted: string
	}
	gpu: {
		vendor: string
		model: string
		bus: string
		busAddress: string
		vram: number
		vramDynamic: boolean
		pciID: string
		vram_formatted: string
	}
}

declare type IPerformance = { success: false } | IPerformanceSuccess;
