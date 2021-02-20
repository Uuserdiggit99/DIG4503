import React, {useState, useEffect, Component} from 'react';
import {render , ReactDom } from 'react-dom';
import axios from 'axios';
//Lab 5
const Posts=()=>{

const[posts,setPosts]= useState();
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=> {
        const responsePosts =res.data;
        setPosts(responsePosts);
    });//axios.get close
},[]);//useEffect Close
return(
    <div>
        <h1>Posts</h1>
        {posts &&
           posts.map((posts)  =>{
               const {id, title, body, userId} = posts;
               return(
                   <div key={id}>
                    <hr/>
                        <h4><u>Title:</u> {title}</h4>
                        <h5><u>UserId</u>: {userId}</h5>
                        <h5><u>ID</u>: {id}</h5>
                        <h5><u>Body</u>: {body}</h5>
                    <hr/>
                   </div>
                    )//return close
            
        })}//posts.map close
    </div>
);//return close

};//const Posts close


class DidUpdate extends Component{//Added this class so I could use componentDidMount.
    
   constructor(props) {
    super(props);
  }//constructor close

    componentDidMount() {console.log("componentDidMount Ran!");}//componentDidMount will run when the page loads
    render(){
        return(<Posts/>);// Returns the content of Posts.js
    }
    
}

export default DidUpdate; // App.js imports Posts, making the default export DidUpdate instead of Posts allows componentDidMount to run.
