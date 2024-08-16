import express from 'express';
import dotenv from 'dotenv';
import Router from './Routes/route.js';
import cors from 'cors';
import session from 'express-session';

dotenv.config();

const port = process.env.port || 8000;

const App = express();
// const port = 8000;

App.use(cors());

App.use(session({
    secret : process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, express:null,maxAge:5 * 60 * 1000}
}))

App.use(express.json());
App.use(Router);



App.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});