/* eslint camelcase: off */
declare module "photoncss";
declare module "photoncss/lib/react";

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

declare interface IRepository {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  archive_url: string
  assignees_url: string
  blobs_url: string
  branches_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  deployments_url: string
  downloads_url: string
  events_url: string
  forks_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  languages_url: string
  merges_url: string
  milestones_url: string
  notifications_url: string
  pulls_url: string
  releases_url: string
  ssh_url: string
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  tags_url: string
  teams_url: string
  trees_url: string
  clone_url: string
  mirror_url: string
  hooks_url: string
  svn_url: string
  homepage: string
  language: null | string
  forks_count: number
  stargazers_count: number
  watchers_count: number
  size: number
  default_branch: string
  open_issues_count: number
  is_template: boolean
  topics: string[]
  has_issues: boolean
  has_projects: boolean
  has_wiki: boolean
  has_pages: boolean
  has_downloads: boolean
  archived: boolean
  disabled: boolean
  visibility: string
  pushed_at: string
  created_at: string
  updated_at: string
  permissions: {
    admin: boolean
    push: boolean
    pull: boolean
  }
  template_repository: {
    id: number
    node_id: string
    name: string
    full_name: string
    owner: Owner2
    private: boolean
    html_url: string
    description: string
    fork: boolean
    url: string
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    downloads_url: string
    events_url: string
    forks_url: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    notifications_url: string
    pulls_url: string
    releases_url: string
    ssh_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    clone_url: string
    mirror_url: string
    hooks_url: string
    svn_url: string
    homepage: string
    language: null | string
    forks: number
    forks_count: number
    stargazers_count: number
    watchers_count: number
    watchers: number
    size: number
    default_branch: string
    open_issues: number
    open_issues_count: number
    is_template: boolean
    license: {
	  key: string
	  name: string
	  url: string
	  spdx_id: string
	  node_id: string
	  html_url: string
	}
    topics: string[]
    has_issues: boolean
    has_projects: boolean
    has_wiki: boolean
    has_pages: boolean
    has_downloads: boolean
    archived: boolean
    disabled: boolean
    visibility: string
    pushed_at: string
    created_at: string
    updated_at: string
    permissions: Permissions2
    allow_rebase_merge: boolean
    temp_clone_token: string
    allow_squash_merge: boolean
    delete_branch_on_merge: boolean
    allow_merge_commit: boolean
    subscribers_count: number
    network_count: number
  }
}
