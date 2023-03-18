import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { IpData } from '../types/utils';

export default (message: string) => (req: Request, res: Response, next: NextFunction) => {

	const date = new Date();

	const matcher = /\$\{ip\}/;
	console.log(
		message.replace(
			matcher,
			'ip: '.concat(
				req.ip.toString(),
				'\nlogged at: ',
				date.toTimeString(),
				' ',
				date.toDateString(),
				'\n',
			)
		)
	);

	const data: IpData = {
		ip: req.ip.toString(),
		date: date.toDateString(),
		timestamp: date.toTimeString(),
	};

	fs.appendFile(
		path.resolve(__dirname, '../logs/request_logs'),
		JSON.stringify(data).concat('\n'), (err) => {
			if (err) console.log(err);
		}
	);

	next();
};