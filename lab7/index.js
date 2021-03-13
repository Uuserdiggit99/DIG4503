import Express from 'express';
const express=Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];




express.get("/people/:person",
    (req,res)=>{
        
        let person = req.params.person;
        
        if (names.includes(person)){
            res.json({name: person});
        } else {
                res.json({name: "Name is not available"});
            }
        
        });

express.get("/search/:name",
    (req,res)=>{
        
        const results = names.filter(str => str.includes(req.params.name));
        
        if (results !=0){
             res.json({search: results});
        } else {
                 res.json({search: "Name is not available"});
            }
        
        });

express.get("/search/",
    (req,res)=>{
        
        res.send(
        "Try going to <br><br><a href=\"http://localhost:45030/people/person\">http://localhost:45030/people/person</a><br><br> Or <br><br> <a href=\"http://localhost:45030/search/a\">http://localhost:45030/search/a</a>");
        });


express.get("/people/",
    (req,res)=>{
        
        res.send(
        "Try going to <br><br><a href=\"http://localhost:45030/people/person\">http://localhost:45030/people/person</a><br><br> Or <br><br> <a href=\"http://localhost:45030/search/a\">http://localhost:45030/search/a</a>");
        });


express.get("/",
    (req,res)=>{
        
        res.send(
        "Try going to <br><br><a href=\"http://localhost:45030/people/person\">http://localhost:45030/people/person</a><br><br> Or <br><br> <a href=\"http://localhost:45030/search/a\">http://localhost:45030/search/a</a>");
        });


express.listen(port,
    ()=>{
        
    
        });
