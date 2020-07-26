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
        
        <button onClick={this.switchNameHandler}>Switch</button>

        <h3>Rendering Person data in App component</h3>
        <p>{this.state.persons[0].name },{this.state.persons[0].age }</p>
        <p>{this.state.persons[1].name },{this.state.persons[1].age }</p>
        <p>{this.state.persons[2].name },{this.state.persons[2].age }</p>
        
        <h3>Rendering Person data using Person component!</h3>
        <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}> I am a soccer player!</Person>
        <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}>I am {this.state.persons[2].name}</Person>
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;