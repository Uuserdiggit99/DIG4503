//NameSearch
import React from "react";

class NameSearch extends React.Component{
    readName(event){
         event.preventDefault();
        console.log("Name Submit Button Clicked");
        
         let name =document.getElementById("name").value;
         console.log("Value of name is ", name);
         
         fetch("/employees/" + name)
         
          .then((res)=>{
                    return res.json();
                })
                
                .then((processed)=>{
                        let reporting = document.getElementById("message");
                        
                        if(processed.Error ){
                            reporting.innerText = processed.Error;
                            console.log("Name Not Found, Error", reporting.innerText);
                        } else {
                            reporting.innerText = processed.age;
                            console.log("Name Exists, Reporting: ", reporting.innerText);
                        }
                    }); 
            //name.value = "";
            }//readName event close
    
    render(){
        return(
            <>
            <form onSubmit={this.readName}>
                <fieldset>

                    <legend>
                        <h2>Enter a Name Below</h2>
                    </legend>
                    
                    <p>
                        Name:<br/>
                        <input type="text" id="name"/>
                    </p>
                    
                    <button type="submit" id="nameSubmit" title="Submit">Submit Name</button>
                </fieldset> 
            </form>
            </>
        );//return close
    }//render close
}//NameSearch Class close
export default NameSearch;
