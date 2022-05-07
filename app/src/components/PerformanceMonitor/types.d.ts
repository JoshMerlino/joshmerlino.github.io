declare namespace Performance {
    type State = Record<string, HardwareSection>;
    interface HardwareSection {
		usageNow: number;
		usageHistory: number[];
        title: string;
        subtitle: string;
        description: string;
        color: string;
        info: {
            left: InfoLine[];
            right: InfoLine[];
        }
    }
    interface InfoLine {
        name: string;
        value: number | boolean | string | null;
        value_formatted: string;
    }
}

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
}
