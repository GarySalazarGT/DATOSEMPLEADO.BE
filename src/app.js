import express from 'express';
import morgan from 'morgan'
import userRoute from './routes/user.route';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

app.use('/api/users', userRoute);

export default app; 