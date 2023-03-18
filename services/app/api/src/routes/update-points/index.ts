import { Router } from 'express';

export default (router: Router) => {

	router.get('/update-points', (req, res) => {
		// get item
		res.send({ data: 'update-points' });
	});

	router.get('/update-points/:id', (req, res) => {
		// get specific item
		res.send({ data: 'update-points' });
	});

	router.put('/update-points/:id', (req, res) => {
		// update-points item
		res.send({ data: 'update-points' });
	});

	router.post('/update-points/:id', (req, res) => {
		// add item
		res.send({ data: 'update-points' });
	});

	router.delete('/update-points/:id', (req, res) => {
		// delete item
		res.status(204);
	});

	return router;
};