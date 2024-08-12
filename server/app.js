import express from "express";
import Routes from "./Routes/route.js";
import Cors from "cors";
const App = express();
const port = 8000;

App.use(Cors());
App.use(express.json());
App.use(Routes);



App.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
