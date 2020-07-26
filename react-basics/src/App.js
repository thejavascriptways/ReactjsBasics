import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons : [
      { name : 'Messi', age: 30},
      { name : 'Ronaldo', age: 33},
      { name : 'Mpappe', age: 26}
    ]
  };

  switchNameHandler = () => {
    this.setState(
      {
        persons:[
          { name : 'Leo Messi', age: 30},
          { name : ' Chris Ronaldo', age: 33},
          { name : 'Mpappe', age: 28}
        ] 
      })
  };

  render() {
    return (
      <div className="App">
        <h1>First React Application!</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}> I am a soccer player!</Person>
        <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}>I am {this.state.persons[2].name}</Person>
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;