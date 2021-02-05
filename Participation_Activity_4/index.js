//Participation Activity 4, Dig 4503
import React from 'react';
import ReactDOM from 'react-dom';

const customer = {
    first_name: 'Luis',
    last_name: 'Lopez'
};
const output = <div>
                    <h1>My name is {customer.first_name}</h1>
                    <h2>My last name is {customer.last_name}</h2>
                </div>;
ReactDOM.render(output, document.querySelector("#root"));
