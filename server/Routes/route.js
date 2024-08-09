import { Router } from "express";
const Routes = Router();

Routes.get("/",(req, res)=>{
    res.json({"content": "Hello"});
});

// parametros por ruta
Routes.get("/home/:name",(req, res)=>{
    const nombre = req.params.name
    res.send(`Home ${nombre}`);
});

// query de la route
Routes.get("/products/nombre",(req,res)=>{
    const id = req.query.product;
    res.send(`Products ${id}`);
})

// body de la routa

Routes.post("/products",(req,res)=>{
    const {nombre,precio} = req.body;
    res.send(`Products ${nombre} creado con precio ${precio}`);
})

export default Routes;