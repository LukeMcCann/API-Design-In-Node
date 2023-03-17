import express from 'express';

const configApp = () => {
	const app = express();

	app.get('/', (req, res) => {
		res.status(200).send({ data: 'Hello World' });
	});

	return app;
};

export const app = configApp();
