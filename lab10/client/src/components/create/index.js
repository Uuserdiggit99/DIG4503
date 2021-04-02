//Create
import React from "react"

class Create extends React.Component{
    
    create(event){

        event.preventDefault();
        console.log("Create Employee Submit Button Clicked");
        
        let name =document.getElementById("newName").value;
        let age =document.getElementById("newAge").value;
        
        console.log("newName: ", name);
        console.log("newAge: ", age );
        
        fetch("/employees/"+name+"/"+age,{"method": "post"})
        
        .then((res)=>{
                
                if(!res.ok){console.log("something is wrong");}
                let reporting = document.getElementById("message");
                reporting.innerText = "New Employee Name and Age Created";
                console.log("reporting: ", reporting.innerText);
                return res.json();
                
            }).then((processed) =>{
                console.log("Processed is: ", processed);
                
            }//then arrow function close
        );//then close
    }// Create Function Close
    
    render(){
        
        return(
            <>
                <form onSubmit={this.create}>
                    <fieldset>
                    
                        <legend>
                                    <h2>Add a new Employee Name and Age below</h2>
                        </legend>
                        
                        
                            New Name:<br/>
                            <input placeholder="new name" tpe="text" id="newName"/> <br/><br/>
                            New Age:<br/>
                            <input placeholder="new age" type="number" id="newAge"/> <br/>
                        
                        
                        <button type="submit" id="createSubmit" title="Submit">Submit</button>
                    </fieldset>
                </form>
            </>
        );//return close
    }//render close
    
}//Create Class Close
export default Create; 
