import express from 'express';
import { ExpressApp } from './types/utils';
import setupRoutes from './routes';
import router from './router';
import morgan from 'morgan';
import prettyErrorHandler from './middleware/prettyErrorHandler';


const configApp = () => {
	const app = express() as ExpressApp;

	// Configure App
	app.Router = router;

	// Start Middleware
	app.use(morgan('dev'));
	app.use(express.urlencoded({ extended: true }));
	app.use(prettyErrorHandler);

	// Additional Setup
	setupRoutes(app);

	return app;
};

export const app = configApp();
