const axios=require("axios");// Allows the axios module to be used in this .js file.
axios("https://pokeapi.co/api/v2/pokemon/necrozma")//This is an HTTP Promise. Once Axios fulfills the promise by accessing the link, the Then function will execute.

    .then(function(response){//Will execute if Axios promise can access the link  (promise is fulfilled).
        const pokemon=response.data;// saves/stores Pokemon's data to the constant "pokemon"
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);//gets name and id number from pokemon const and prints it to the console.
    })//This parenthesis closes the Then function. 
    
    .catch(function(error){//If the Then function is unable to execute(the promise is unfulfilled ), this Catch function  will run instead.
        console.log("Error: " + error);/*
        This will print an error if the Pokemon mentioned in the pokeapi link above 
        does not exist. If the Pokemon does not exist (for example, the name is misspelled) 
        this error will print to the console: 
        Error: Error: Request failed with status code 404
        */
    })/*This parenthesis ends the Catch function*/;/*This semicolon ends/closes all functions and activities related to the Axios promise*/ 
