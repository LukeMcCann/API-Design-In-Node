import { app } from './server';
import { config as dotenv } from 'dotenv';

dotenv();
app.listen(3001);
