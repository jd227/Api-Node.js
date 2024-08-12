import { Router } from "express";
import query from "../database/querys/query";
import dbAsync from "../database/querys/queryAsync.js"
import queryAsync from "../database/querys/queryAsync.js";

const Routes = Router();
const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
}

const dbAs= new dbAsync(config);
const queryAs = new queryAsync(dbAs.getConnection());




// Routes.get("/",(req, res)=>{
//     res.json({"content": "Hello"});
// });

// // parametros por ruta
// Routes.get("/home/:name",(req, res)=>{
//     const nombre = req.params.name
//     res.send(`Home ${nombre}`);
// });

// // query de la route
// Routes.get("/products/nombre",(req,res)=>{
//     const id = req.query.product;
//     res.send(`Products ${id}`);
// })

// // body de la routa

// Routes.post("/products",(req,res)=>{
//     const {nombre,precio} = req.body;
//     res.send(`Products ${nombre} creado con precio ${precio}`);
// })

// Router.get("/",(req, res)=> {
//     res.json({
//         message:"Hello word from express API"
//     });
// });

// Router.get("/user", async (req,res) => {
//     try {
//         const users = await query.getAlluser();
//         res.json(users);
//     }
//     catch (error) {
//         console.log(users);
//         res.status(500).json({error:"server error"});
//     }
// });

// export default Routes;


Routes.get("/users",async (req,res) =>{
    try{
        const users = await queryAsync.getAllUsers();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

Routes.get("",async (req,res) =>{
    try{
        const data = await queryAs.getUsers();
        dbAs.close();
        res.json(data);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "server error"});

    } 
});

export default Routes;