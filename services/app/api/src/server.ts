import express from 'express';
import { ExpressApp } from './types/utils';
import setupRoutes from './routes';
import router from './router';
import morgan from 'morgan';

const configApp = () => {
	const app = express() as ExpressApp;

	// Configure App
	app.Router = router;

	// Start Middleware
	app.use(morgan('dev'));

	// Additional Setup
	setupRoutes(app);

	return app;
};

export const app = configApp();
