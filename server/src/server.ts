import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import userRouter from './routes/userRoute';
import currentUserRouter from './routes/currentUserRoute';
import favoriteRouter from './routes/favoriteRoute';

app.use('/', userRouter);
app.use('/', currentUserRouter);
app.use('/favorites', favoriteRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(8080, ()=> {
    console.log('Server is running on http://localhost:8080');
});