import MongoClient from "mongodb";

const URL ='mongodb+srv://llopez:z8AChzyH7XfJl5XA@cluster0.oewwc.mongodb.net/sample_airbnb.listingsAndReviews';

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection=>{
    console.log("\nConnected\n");
    
    let database=connection.db("sample_airbnb");
    
    let collection=database.collection("listingsAndReviews");
    
    //let cursor=collection.find({ beds : {$gte:5} }, { price : {$lte: 200} }, {"review_scores.review_scores_rating" : {$gte:99} } );
    
    let cursor=collection.find({ beds : {$gte:5} }, { price : {$lte: 200} });
    
    cursor.forEach(document=> {
        
        console.log(document.name);
        
    }, ()=>{
        connection.close();
        console.log("\nDisconnected\n");
    })
    
})
.catch(error=>{
    console.log("Error", error);
})
