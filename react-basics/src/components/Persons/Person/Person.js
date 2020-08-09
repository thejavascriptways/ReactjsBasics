import React from 'react';
import classPerson from './Person.css';



const person = (props) =>{

console.log('Person.js render');

return (
    <div className={classPerson.Person}>
        <p onClick ={props.click}>I am {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type ="text" onChange={props.changed} value ={props.name}/>
    </div>
    )
};

export default person;