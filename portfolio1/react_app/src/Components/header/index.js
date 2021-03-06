import React, {Component} from 'react';
import react from './images/react.png';
import "./index.css";
export default class Header extends Component {
    render(){
        return(
            <header>
            <img id="" src={react} alt="React Logo"/>
            <section>
                <div>
                    <h5>Open the console and scroll to the bottom if viewing in browser.</h5>
                    <p>This is a simple coutner. <u>It counts up to <strong>10</strong> before reseting.</u></p>
                </div>
            </section>
            </header>
        );
    }
}
