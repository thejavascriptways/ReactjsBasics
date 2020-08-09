import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import Validation from './Validation/Valdation';
//import Char from './Char/Char';


class App extends Component {

  state = {
    persons : [
      {id: '1', name : 'Messi', age: 30},
      {id: '2', name : 'Ronaldo', age: 33},
      {id: '3', name : 'Mpappe', age: 26}
    ],
    otherState:'some other state value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons:[
          {id : '1', name : newName, age: 30},
          {id : '2', name : 'Ronaldo', age: 33},
          {id : '3', name : 'Mpappe', age: 28}
        ] 
      })
  };
  
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    
    this.setState({persons: newPersons});
  };

  deletePersonHandler = (index) => {
   const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () =>{
    const show = this.state.showPersons;
    this.setState ({showPersons: !show})
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button];
    if( this.state.showPersons){
      persons = (
        <div> 
          {this.state.persons.map((person, index)=> {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.nameChangedHandler(event,person.id)}
              name ={person.name} 
              age = {person.age}
              key = {person.id} />    
          })}
       </div>
      )
      btnClass.push(classes.Red);
    }

    const assignedClasses =[];
    if(this.state.persons.length <= 3){
      assignedClasses.push(classes.blue);
    }
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
     
        <div className={classes.App}>
          <h1>React app!!</h1>
          <p className={assignedClasses.join(' ')}> This app is working!</p>
          <button className={btnClass.join(' ')}
            onClick={this.togglePersonHandler}>Show/Hide
          </button>
          {persons}
        </div>
    );
  }
}

export default App;