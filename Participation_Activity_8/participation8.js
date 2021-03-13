import Express from 'express';
const App=Express();
const port = 45030;


App.get("/user/:id",
    (req,res)=>{
        
        res.json({userid:req.params.id});

        });
App.get("/user/",
    (req,res)=>{
        
        res.send("Content Goes Here! To see JSON go to: <a href=\"http://localhost:45030/user/id\">http://localhost:45030/user/id</a>");

        });

App.get("/",
    (req,res)=>{
        
        res.send(
        "Try going to <br><br><a href=\"http://localhost:45030/user\">http://localhost:45030/user</a><br><br>and <br><br><a href=\"http://localhost:45030/user/id\">http://localhost:45030/user/id</a>");
        });


App.listen(port,
    ()=>{
        
    
        });
