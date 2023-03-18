import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const createJWT = (user: User) => (
	jwt.sign({
		id: user.id,
		username: user.username
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	}, process.env.JWT_SECRET!)
);
