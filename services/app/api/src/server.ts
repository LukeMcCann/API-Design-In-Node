import express from 'express';
import { ExpressApp } from './types/utils';
import setupRoutes from './routes';
import router from './router';
import morgan from 'morgan';
import prettyErrorHandler from './middleware/prettyErrorHandler';
import requestLogger from './middleware/requestLogger';
import cors from 'cors';

const configApp = () => {

	const app = express() as ExpressApp;

	// Configure App
	app.Router = router;

	// Start Middleware
	app.use((req, res) => {
		console.log(process.env.JWT_SECRET);
		if (!process.env.JWT_SECRET) {
			// Just for course purposes, wanted to stay focused
			// on the main concepts and not got bogged down
			// in making this nice.
			res.status(500).send({ error: 'Invalid JWT secret' });
		}
	});
	app.use(cors());
	app.use(morgan('dev'));
	app.use(express.urlencoded({ extended: true }));
	app.use(prettyErrorHandler);
	app.use(requestLogger('Request From ${ip}'));

	// Additional Setup
	setupRoutes(app);

	return app;
};

export const app = configApp();
