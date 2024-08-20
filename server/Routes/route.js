
import { Router } from 'express';
import ItemRepository from "../database/querys/queryAsync.js";
import config from "../database/connection/config.js";
import Database from '../database/connection/dbAsync.js';

const Routes = Router();

const dbAs = new Database(config);
const queryAs = new ItemRepository(dbAs);

Routes.get("/", (req,res) => {
    res.json({message: "Welcome to my API"});
});

Routes.post("/login", (req,res) => {
    req.session.user = {
        //logica de login
        id: "1",
        username: "admin"
    }
});

Routes.get("/logout", (req,res) => {
    // Destruir login
    req.session.destroy((err) => {
        if(err) throw err;
        res.json({message: "logout"});
    })
});

Routes.get("/users",async (req,res) =>{
    try{
        const users = await queryAs.getAllUsers();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});


Routes.get("/users/:id",async (req,res) =>{
    try{
        const user = req.params.id;
        const data = await queryAs.getUserById(user);
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.get("/create/:Nombres/:Apellidos/:Celular/:Edad",async (req,res) =>{

    try{
        const {nombres, apellidos, celular, edad} = req.params;
        const data = await queryAs.create(nombres, apellidos, celular, edad);
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});

Routes.get("/update/:id/:edad",async (req,res) =>{
    try{
        const {id, edad} = req.params;
        const data = await queryAs.update(id, edad);
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});


Routes.get("/delete/:id",async (req,res) =>{
    try{
        const id = req.params.id;
        const data = await queryAs.delete(id);
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    }
});
export default Routes;
