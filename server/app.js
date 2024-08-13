import express from 'express';
import Router from './Routes/route.js';
import cors from 'cors';
const App = express();
const port = 8000;

App.use(cors());
App.use(express.json());
App.use(Router);


App.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});