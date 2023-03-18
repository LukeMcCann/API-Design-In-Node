import { Router } from 'express';

export default (router: Router) => {

	router.get('/update', (req, res) => {
		// get item
		res.send({ data: 'update' });
	});

	router.get('/update/:id', (req, res) => {
		// get specific item
		res.send({ data: 'update' });
	});

	router.put('/update/:id', (req, res) => {
		// update item
		res.send({ data: 'update' });
	});

	router.post('/update/:id', (req, res) => {
		// add item
		res.send({ data: 'update' });
	});

	router.delete('/update/:id', (req, res) => {
		// delete item
		res.status(204);
	});

	return router;
};
