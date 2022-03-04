declare namespace API {
    interface Root {
        success: boolean;
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
