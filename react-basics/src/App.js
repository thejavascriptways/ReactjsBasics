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

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons:[
          { name : newName, age: 30},
          { name : newName, age: 33},
          { name : newName, age: 28}
        ] 
      })
  };

  render() {
    return (
      <div className="App">

        <button onClick={this.switchNameHandler.bind(this,'Hazard')}>Switch</button>

        <h3>Rendering Person data using Person component!</h3>
        <Person 
          click = {this.switchNameHandler.bind(this, 'Neymar')}
          name ={this.state.persons[0].name} 
          age ={this.state.persons[0].age} />
        <Person 
          click = {() => this.switchNameHandler('Benzema')}
          name ={this.state.persons[1].name} 
          age ={this.state.persons[1].age}> I am a soccer player!
          </Person>
        <Person 
          click = {this.switchNameHandler.bind(this, 'Suarez')}
          name ={this.state.persons[2].name} 
          age ={this.state.persons[2].age}>I am {this.state.persons[2].name}
          </Person>
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;