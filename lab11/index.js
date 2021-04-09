import MongoClient from "mongodb";

const URL ='mongodb+srv://llopez:z8AChzyH7XfJl5XA@cluster0.oewwc.mongodb.net/sample_airbnb.listingsAndReviews';

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection=>{
    console.log("connection");
    
    let database=connection.db("sample_airbnb");
    
    let collection=database.collection("listingsAndReviews");
    
    //let cursor=collection.find({ "score": {$gte: "99"}, "beds": {$gte: "5"}, "price": {$lte: "200"} });//this isn't working quite yet
    
    let cursor=collection.find({ notes : "" });//this is a test
    
    cursor.forEach(document=> {
        
        console.log(document.name);
        
    }, ()=>{connection.close()})
    
})
.catch(error=>{
    console.log("Error", error);
})
