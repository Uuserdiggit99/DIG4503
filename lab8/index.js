import Express from "express";
import fs from "fs";

const express= Express();
const port = 3010;

let databaseContents=fs.readFileSync("database.json");
let database=JSON.parse(databaseContents);

express.listen(port,()=>{
    console.log("Express Server is Running on Port 3010, localhost/3010 ;");
})


express.get("/employees/:name",(req,res)=>{
    let employees = {"Error" : "Not Found"};
    
    database.forEach((value)=>{
        if(req.params.name == value.name){
            employees = value;
        }
    });
    res.json(employees);
})

express.get("/ages/:number",(req,res)=>{
    let ages = {"Error" : "Not Found"};
    
    database.forEach((value)=>{
        if(req.params.number == value.age){
            ages = value;
        }
    });
    res.json(ages);
})
