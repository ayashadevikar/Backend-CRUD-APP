import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'
import userRouter from './route/user.route.js'
import cors from "cors";

const app = express();

dotenv.config();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());
app.use('/api/v1', userRouter)



export default app;