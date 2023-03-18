import { Express, Router } from 'express';

export type ExpressApp = {
	Router: Router,
	apiRouters: Router[],
} & Express;

export interface ResponseError extends Error {
	status?: number,
}

export interface IpData {
	ip: string,
	date: string,
	timestamp: string,
}