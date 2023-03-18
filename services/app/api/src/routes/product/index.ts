import { Router } from 'express';

export default (router: Router) => {

	router.get('/product', (req, res) => {
		// get item
		res.send({ data: 'product' });
	});

	router.get('/product/:id', (req, res) => {
		// get specific item
		res.send({ data: 'product' });
	});

	router.put('/product/:id', (req, res) => {
		// update item
		res.send({ data: 'product' });
	});

	router.post('/product/:id', (req, res) => {
		// add item
		res.send({ data: 'product' });
	});

	router.delete('/product/:id', (req, res) => {
		// delete item
		res.status(204);
	});

	return router;
};
