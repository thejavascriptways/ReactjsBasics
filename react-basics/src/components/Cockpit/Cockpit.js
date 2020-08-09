import React from 'react';
import classes from './Cockpit.css';

const cockpit =(props) =>{
            
    let btnClass='';
    if (props.showPersons){
        btnClass =classes.Red;
    }

    const assignedClasses =[];
    if(props.persons.length <= 3){
      assignedClasses.push(classes.blue);
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className ={classes.Cockpit}>
            <h1>React app!!</h1>
            <p className={assignedClasses.join(' ')}> This app is working!</p>
            <button className={btnClass}
                onClick={props.toggle}>Show/Hide
            </button>
        </div>
    );
};

export default cockpit;