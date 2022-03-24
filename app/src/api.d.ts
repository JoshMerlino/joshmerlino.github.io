declare namespace API {
    interface Root {
        success: boolean;
    }

    interface Series {
		req_per_second: number;
		response_time: number;
        req_counter: number;
        name: string;
		type: string;
		data: any[]
    }

    interface RequestData extends Root {
        history?: Series[];
    }

    interface Performance extends Root {
        nodes: {
            name: string;
            stats: IPerformanceSuccess;
        }[]
    }

}
