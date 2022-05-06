import { Request, Response } from "express";
import si from "systeminformation";

export const route = [
	"v3/performance"
];

export default async function api(req: Request, res: Response): Promise<void> {
	const cpu = await si.cpu();
	res.json({
		cpu: {
			title: "CPU",
			subtitle: `${cpu.manufacturer} ${cpu.brand}`,
			info: [ {
				name: "Base speed",
				value: cpu.speedMax || cpu.speed,
				value_formatted: `${cpu.speedMax || cpu.speed} GHz`
			}, {
				name: "Sockets",
				value: parseInt(cpu.socket || "1"),
				value_formatted: parseInt(cpu.socket || "1").toString()
			}, {
				name: "Cores",
				value: cpu.physicalCores,
				value_formatted: cpu.physicalCores.toString()
			}, {
				name: "Logical processors",
				value: cpu.cores,
				value_formatted: cpu.cores.toString()
			}, {
				name: "Virtualization",
				value: cpu.virtualization,
				value_formatted: cpu.virtualization ? "Enabled" : "Disabled"
			} ]
		}
	});
}
