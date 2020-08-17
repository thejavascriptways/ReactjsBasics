import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit =(props) =>{

    // useEffect(() => {
    //   console.log('Cockpit.js useEffect');

    //   setTimeout(() =>{
    //     alert("useEffect triggered");
    //   },1000);
    //   return () => {
    //     console.log('Cockpit.js cleanup work');
    //   }
    // },[]);

    // useEffect(() => {
    //   console.log('Cockpit.js 2nd useEffect');
      
    //   return () => {
    //     console.log('Cockpit.js 2nd cleanup work');
    //   }
    // });

    let btnClass='';
    if (props.showPersons){
        btnClass =classes.Red;
    }

    const assignedClasses =[];
    if(props.personsLen <= 3){
      assignedClasses.push(classes.blue);
    }
    if(props.personsLen <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLen <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className ={classes.Cockpit}>
            <h1>{props.appName}</h1>
            <p className={assignedClasses.join(' ')}> This app is working!</p>
            <button className={btnClass}
                onClick={props.toggle}>Show/Hide
            </button>
        </div>
    );
};

export default React.memo(cockpit);