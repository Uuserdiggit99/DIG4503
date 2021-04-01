import Express from "express";
import fs from "fs";
import cors from "cors";

const App= Express();
const port = 3010;

App.use(cors());

let databaseContents=fs.readFileSync("database.json");
let database=JSON.parse(databaseContents);

App.use("/", Express.static("client/build"));

App.listen(port,()=>{
    console.log("Express Server is Running on Port 3010, localhost/3010 ;");
})


App.get("/employees/:name",(req,res)=>{
    let employees = {"Error" : "Not Found"};
    
    database.forEach((value)=>{
        if(req.params.name == value.name){
            employees = value;
        }
    });
    res.json(employees);
})

App.get("/ages/:number",(req,res)=>{
    let ages = {"Error" : "Not Found"};
    
    database.forEach((value)=>{
        if(req.params.number == value.age){
            ages = value;
        }
    });
    res.json(ages);
})

App.post("/employees/:name/:age",(req,res)=>{
    
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age)
    };//let results close

    database.push(result);
    

    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
    
    res.json(result);
  
});//App.Post Close


