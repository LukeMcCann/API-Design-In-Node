import express from 'express';
import { ExpressApp } from './types/utils';
import setupRoutes from './routes';
import router from './router';

const configApp = () => {
	const app = express() as ExpressApp;

	app.Router = router;

	setupRoutes(app);

	return app;
};

export const app = configApp();
