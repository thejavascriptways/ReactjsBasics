import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First React Application!</h1>
        <Person name ="Messi" age ="33" />
        <Person name ="Ronaldo" age ="35"> I am a soccer player!</Person>
        <Person name ="Nothing" age ="99">I am Nothing</Person>
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  }
}

export default App;
