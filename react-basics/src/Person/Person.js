import React from 'react';
import classPerson from './Person.css';



const person = (props) =>{

const mediaQuery ={
    '@media (min-width: 500px)' : {
        width: '450px',
        backgroundColor: 'gray'
    },
    
}

return (
    <div className={classPerson.Person} style={mediaQuery}>
        <p onClick ={props.click}>I am {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type ="text" onChange={props.changed} value ={props.name}/>
    </div>
    )
};

export default person;