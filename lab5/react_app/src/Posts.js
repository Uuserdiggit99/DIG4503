import React, {useState, useEffect} from 'react';
import {render , ReactDom } from 'react-dom';
import axios from 'axios';

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
            
        }/*posts.map close*/)/**/}/**/
    </div>
);//return close

};/*const Posts close*/


export default Posts;
