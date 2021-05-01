import MongoClient from "mongodb";
import colors from "colors";
import CFonts from "cfonts";


const URL ='mongodb+srv://llopez:z8AChzyH7XfJl5XA@cluster0.oewwc.mongodb.net/sample_airbnb.listingsAndReviews';

const output1 = CFonts.render('Connected', {
	colors: ['white'],
	gradient: ['blue', 'green'],
	background: 'black',
	space: false,
	env: 'node',
});

const output2 = CFonts.render('Disconnected', {
	colors: ['white'],
	gradient: ['yellow', 'red'],
	background: 'black',
	space: false,
	env: 'node',
});

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection=>{
    console.log("\n" + output1.string + "\n");
    
    let database=connection.db("sample_airbnb");
    
    let collection=database.collection("listingsAndReviews");
    
    let cursor=collection.find({ beds : {$gte:5}, price : {$lte: 200}, "review_scores.review_scores_rating" : {$gte:99}  } );
    
     cursor.forEach(document=> {
         
         console.log(document.name.america.underline.bold.inverse);
         
     }, ()=>{
         connection.close();
         console.log("\n" + output2.string + "\n");
     })
    
})
.catch(error=>{
    console.log(colors.trap("error" + error + ""));
})
