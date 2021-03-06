import React, {Component} from 'react';
import Unmount_refresh from '../unmount_refresh/index';
import Header from '../header/index';
import "../../index.css";

//Counter index.js

class Counter extends Component{

    constructor(props) {
     super(props);
     this.state = {
         count: 0,
         number: "|   Zero"
        
     };
   }

  componentDidMount() {
      console.log("componentDidMount Ran!"); 
      if(this.state.count==0){
            this.state.number="|   One";
            console.log("Switch statement says Number Text is:", this.state.number);
            console.log("Count:", this.state.count);
    }
}//Executes AFTER component has mounted (when this page loads)
  
  
  componentDidUpdate() {
      console.log("componentDidUpdate Ran!");
        console.log("Count:", this.state.count);

      switch(this.state.count){
        
        case 0:
            this.state.number="|   One";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
    
        case 1:
            this.state.number="|   Two";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 2:
            this.state.number="|   Three";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 3:
            this.state.number="|   Four";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 4:
            this.state.number="|   Five";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 5:
            this.state.number="|   Six";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 6:
            this.state.number="|   Seven";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 7:
            this.state.number="|   Eight";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 8:
            this.state.number="|   Nine";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 9:
            this.state.number="|   Ten";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 10:
            this.state.number="|   Eleven"; 
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 11:
            this.state.number="|   Twelve";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
            
        case 12:
            this.state.number="|   Thirteen";
            console.log("Switch statement says Number Text is:", this.state.number);
            break;
        
    }
      
    if(this.state.count<0){
       window.location.reload();
        console.log("Counter Reset,value Less than 0 ");
    }
      
      if(this.state.count>10){
           window.location.reload();
          console.log("Counter Reset,value greater than 10 ");
    }
}//didUpdate
  //Executes if the DOM updates (any change on the page will trigger this)
  
  componentWillUnmount(){
      console.log("componentWillUnmount Ran!");
      this.setState({ count: this.state.count=0 });
    }/*Executes right before a component is unmounted. */

  



  render() {  
    return (
    <>
      <div>
        <Header/>
        
        <section class="infoSection">
        
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} id="counter" >
                    <p>You clicked <u>{this.state.count}</u>   {this.state.number} times!</p>
                </button>
            </div>
        
        </section> 
        
        <section id="buttons">
        
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> 
                    Click +1
                </button>
            </div>
            
            <div>
                <button onClick={() => this.setState({ count: this.state.count - 1, number: this.state.number="" })}> 
                    Click -1
                </button>
            </div>
            
            <div>
                <button onClick={()=> this.setState({ count: this.state.count=0, number: this.state.number="|   Zero" })}>
                    Click to Reset.
                </button>
            </div>
            
            <div>
                <button onClick={()=> Unmount_refresh()}>
                    Click to Unmount Root Node.
                </button>
            </div>
        
        </section>
        
      </div>
      
    </>

    );
   

  }//componentDidUpdate will run each time the "Click +1" button above^ is clicked
}


export default Counter;
/* Index.js imports this file like this: import Counter from './Components/counter/index'; 
                    and displays class Counter like this <Counter /> */
