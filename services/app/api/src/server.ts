import express from 'express';
import Router from './router';
import setupRoutes from './routes';
import { ExpressApp } from './types/utils';

const configApp = () => {
	const app = express() as ExpressApp;

	app.Router = Router;

	setupRoutes(app);

	return app;
};

export const app = configApp();
