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
          { name : 'Ronaldo', age: 33},
          { name : 'Mpappe', age: 28}
        ] 
      })
  };

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons:[
          { name : 'Messi', age: 30},
          { name : event.target.value, age: 33},
          { name : 'Mpappe', age: 28}
        ] 
      })
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">

        <h1>React app!!</h1>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,'Hazard')}>Switch
        </button>

        
        <Person 
          click = {this.switchNameHandler.bind(this, 'Neymar')}
          name ={this.state.persons[0].name} 
          age ={this.state.persons[0].age} />
        <Person 
          name ={this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          changed={this.nameChangedHandler}> I am a soccer player!
          </Person>
        <Person 
        click = {() => this.switchNameHandler('Benzema')}
          name ={this.state.persons[2].name} 
          age ={this.state.persons[2].age}>I am {this.state.persons[2].name}
          </Person>
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;