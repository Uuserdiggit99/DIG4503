import React from "react"

class AgeSearch extends React.Component{
    
    readAge(event){// If age exists, return the name associated with the age from database.json to the reporting area
        event.preventDefault();
        console.log("Age Submit Button Clicked");
        
        let age =document.getElementById("age").value;
        console.log("Value of age is ", age);
        fetch("/ages/" + age)
        
            .then((res)=>{
                    return res.json();
                })
                
                .then((processed)=>{
                        let reporting = document.getElementById("message");
                        
                        if(processed.Error){
                            reporting.innerText = processed.Error;
                            console.log("Age Not Found, Error", reporting.innerText);
                        } else {
                            reporting.innerText = processed.name;
                            console.log("Age Exists, Reporting: ", reporting.innerText);
                        }
                    });//then processed close
        age.value="";        
        }//readAge event close
        
    render(){
        return(
            <>
                <form onSubmit={this.readAge}>
                    <fieldset>
                        
                        <legend>
                                <h2>Enter an Age Below</h2>
                        </legend>
                        
                        <p>
                            Age:<br/>
                            <input type="number" id="age"/>
                        </p>

                        <button type="submit" id="ageSubmit" title="Submit">Submit Age</button>
                    </fieldset>    
                </form>
            </>
            
        );//return close
    }//render close
}//AgeSearch Class Close
export default AgeSearch;
