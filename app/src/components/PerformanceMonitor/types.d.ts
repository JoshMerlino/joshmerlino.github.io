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
