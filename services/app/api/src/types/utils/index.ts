import { Express, Router } from 'express';

export type ExpressApp = {
	Router: Router,
} & Express;
