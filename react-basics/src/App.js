import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons:[
          {id : '1', name : 'Messi', age: 30},
          {id : '2', name : event.target.value, age: 33},
          {id : '3', name : 'Mpappe', age: 28}
        ] 
      })
  };

  deletePersonHandler = (index) => {
   //  const persons = this.state.persons;// or use spread operator
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () =>{
    const show = this.state.showPersons;
    this.setState ({showPersons: !show})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if( this.state.showPersons){
      persons = (
        <div> 
          {this.state.persons.map((person, index)=> {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              changed = {this.nameChangedHandler}
              name ={person.name} 
              age = {person.age}
              key = {person.id} />              
          })}
       </div>
      )
    }

    return (
      <div className="App">

        <h1>React app!!</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Show/Hide
        </button>
        {persons}
        
       
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;