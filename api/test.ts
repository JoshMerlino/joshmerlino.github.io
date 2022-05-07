import { Request, Response } from "express";
import fetch from "node-fetch";

export const route = [
	"v3/performance",
	"v3/performance/:ipaddress"
];

export async function stat(hostname: string): Promise<Record<string, any>> {
	const resp = await fetch(`http://${hostname}:8310/api/v3/performance`)
		.then(resp => resp.json());
	return resp;
}

export default async function api(req: Request, res: Response): Promise<unknown> {
	const ipaddress = (req.query.ipaddress || req.params.ipaddress || "localhost").toString();
	const stats = await Promise.race(ipaddress.split(",").map(async ipaddress => await stat(ipaddress)));
	res.json(stats);
	return;
}
