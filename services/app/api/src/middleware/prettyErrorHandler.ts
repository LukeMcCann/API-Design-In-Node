import { Request, Response, NextFunction } from 'express';
import { ResponseError } from '../types/utils';

export default (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
	const errStatus = err.status || 500;
	const errMsg = err.message || 'Something went wrong';
	res.status(errStatus).json({
		success: false,
		status: errStatus,
		message: errMsg,
		stack: process.env.NODE_ENV === 'development' ? err.stack : {}
	});
};
