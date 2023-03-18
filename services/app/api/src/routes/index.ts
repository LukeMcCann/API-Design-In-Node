import path from 'path';

export default (app: any) => {
	const routes = [
		'product',
	];

	routes.forEach(async route => {
		const routeModule = await import(
			path.resolve(__dirname, './', `${route}`)
		);
		routeModule.default(app);
	});
};
