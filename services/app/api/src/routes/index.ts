import { Router } from 'express';
import path from 'path';
import { ExpressApp } from '../types/utils';

export default async (app: ExpressApp) => {
	const apiRouters: Router[] = [Router()];

	const routes = ['product', 'update', 'update-points'];

	await Promise.all(
		routes.map(async (route) => {
			const routeModule = await import(path.resolve(__dirname, './', `${route}`));
			apiRouters.push(routeModule.default(Router()));
		})
	);

	app.use('/api', apiRouters);
};
