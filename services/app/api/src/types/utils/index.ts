import { Express, Router } from 'express';

export type ExpressApp = {
	Router: Router,
	apiRouters: Router[],
} & Express;
