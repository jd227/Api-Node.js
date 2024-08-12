import mysql from "mysql2"

const connectInfo ={
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
}

const connection = mysql.createConnection(connectInfo)

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to the database");
    }
})

export default connection;