import React, {useState, useEffect, Component} from 'react';
import {render , ReactDom } from 'react-dom';
import Posts from './Posts';//App.js imports const Posts from Posts.js
//Lab 5
class App extends Component{
    
   constructor(props) {
    super(props);
  }//constructor close
    render(){
        return(<Posts/>);// Returns the content of Posts.js including componentDidMount. Index.js imports App.js <App />.
    }
    
}


export default App;

