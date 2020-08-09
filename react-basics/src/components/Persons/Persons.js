import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  static getDerivedStateFromProps=(props, state) =>{
    console.log('Persons.js getDerivedStateFromProps');
    console.log(props);
    console.log(state);
    return state;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('Persons.js shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    if(nextProps.persons !==  this.props.persons){
      return true;
    }
    else{
      return false;
    }
    
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Persons.js getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    return ({message: "snapshot taken"});
  }

  componentDidUpdate = (prevProps, prevState,snapshot) =>{
    console.log(snapshot);
    console.log('Persons.js componentDidUpdate');
  }

  componentWillUnmount = () =>{
    console.log('Persons.js componentWillUnmount');
  }


  render(){
    console.log('Persons.js render');
    return this.props.persons.map((person, index)=> {
      return <Person
        click = {() => this.props.clicked(index)}
        changed = {(event) => this.props.changed(event,person.id)}
        name ={person.name} 
        age = {person.age}
        key = {person.id} />    
    });
    }

}

export default Persons;
