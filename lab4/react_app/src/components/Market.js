import React, {Component} from 'react';
import Item from './MarketItem'
    class Market extends Component{
        constructor(props){
            super(props);
            this.state={count: 0};//count initialized to zero
        };//constructor close
    
    render(){
        return(
            <div>
                <Item count={this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count +1})}> Add Item</button>
            </div>
        );//return close | Button Above^^ adds one to count when clicked
        
    }//render close
};//class close
export default Market;
