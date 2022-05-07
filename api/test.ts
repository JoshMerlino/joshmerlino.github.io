import { Request, response, Response } from "express";
import fetch from "node-fetch";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const route = "test";

export default async function api(req: Request, res: Response): Promise<void> {

	const reqd = await fetch("https://api.joshmerlino.me/v2/request-data")
		.then(resp => resp.json());

	const usageHistory = reqd.history.filter(a => a.req_counter !== 0).map(a => {
		let res = a.req_per_second;
		while (res > 100) res /= 10;
		return res/100;
	});

	const pingHistory = reqd.history.filter(a => a.req_counter !== 0).map(a => {
		let res = a.response_time;
		while (res > 100) res /= 10;
		console.log(res);
		return res/100;
	});

	const response = {
		reqd,
		success: true,
		sections: {
			api: {
				title: "API Requests",
				subtitle: "Requests / second",
				description: `Past ${reqd.history.filter(a => a.req_counter !== 0).length} minutes`,
				usageHistory,
				usageNow: usageHistory[usageHistory.length - 1],
				color: "#f43f5e",
				info: {
					left: [ {
						name: "1s",
						value: Math.round(reqd.history[reqd.history.length - 1].req_per_second),
						value_formatted: Math.round(reqd.history[reqd.history.length - 1].req_per_second).toLocaleString()
					}, {
						name: "1m",
						value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 1].req_counter,
						value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 1].req_counter).toLocaleString()
					} ],
					right: []
				}
			},
			ping: {
				title: "Ping",
				subtitle: "ms / request",
				description: `Past ${reqd.history.filter(a => a.req_counter !== 0).length} minutes`,
				usageHistory: pingHistory,
				usageNow: pingHistory[pingHistory.length - 1],
				color: "#14b8a6",
				info: {
					left: [ {
						name: "1s",
						value: Math.round(reqd.history[reqd.history.length - 1].req_per_second),
						value_formatted: Math.round(reqd.history[reqd.history.length - 1].req_per_second).toLocaleString()
					}, {
						name: "1m",
						value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 1].req_counter,
						value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 1].req_counter).toLocaleString()
					} ],
					right: []
				}
			}
		}
	};

	if (reqd.history.filter(a => a.req_counter !== 0).length > 1 + 5) response.sections.api.info.left.push({
		name: "5m",
		value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 5].req_counter,
		value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 5].req_counter).toLocaleString()
	});

	if (reqd.history.filter(a => a.req_counter !== 0).length > 1 + 15) response.sections.api.info.left.push({
		name: "15m",
		value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 15].req_counter,
		value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 15].req_counter).toLocaleString()
	});

	if (reqd.history.filter(a => a.req_counter !== 0).length > 1 + 30) response.sections.api.info.left.push({
		name: "30m",
		value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 30].req_counter,
		value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[reqd.history.length - 1 - 30].req_counter).toLocaleString()
	});

	if (reqd.history.filter(a => a.req_counter !== 0).length >= 60) response.sections.api.info.left.push({
		name: "60m",
		value: reqd.history[reqd.history.length - 1].req_counter - reqd.history[0].req_counter,
		value_formatted: (reqd.history[reqd.history.length - 1].req_counter - reqd.history[0].req_counter).toLocaleString()
	});

	res.json(response);
}
