import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'


const app = express();

dotenv.config();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// app.use('/api/v1', userRouter)

export default app;