import Express from "express";
import fs from "fs";

const express= Express();
const port = 3010;


express.listen(port,()=>{
    
    console.log("Express Server is Running on Port 3010, localhost/3010 ;");
    
})
