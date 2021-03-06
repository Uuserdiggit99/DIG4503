import React, {Component} from 'react';
import { unmountComponentAtNode, render , ReactDom } from 'react-dom';
//

//unmount_refresh.js

 export default  function Unmount_refresh(){
    unmountComponentAtNode(document.getElementById('root'));
    console.log("Unmount Button Clicked");
    console.log("Refresh the page to view the counter again!");
}

