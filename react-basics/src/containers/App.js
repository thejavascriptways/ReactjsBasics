import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js constructor');
    console.log(this.props);
  }

  state = {
    persons : [
      {id: '1', name : 'Messi', age: 30},
      {id: '2', name : 'Ronaldo', age: 33},
      {id: '3', name : 'Mpappe', age: 26}
    ],
    otherState:'some other state value',
    showPersons: false
  };

  static getDerivedStateFromProps=(props, state) =>{
    console.log('App.js getDerivedStateFromProps');
    console.log(props);
    console.log(state);
    return state;
  }

  componentDidMount = () => {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('App.js shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidUpdate = () =>{
    console.log('App.js componentDidUpdate');
  }

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
    console.log('App.js Render');
    let persons = null;
    if( this.state.showPersons){
      persons = (
        <div> 
          <Persons
            persons ={this.state.persons}
            clicked = {this.deletePersonHandler}
            changed ={this.nameChangedHandler}
            />
       </div>
      )
    }

    return (
        <div className={classes.App}>
          <Cockpit
            appName ={this.props.appName}
            showPersons ={this.state.showPersons}
            persons ={this.state.persons}
            toggle ={this.togglePersonHandler}
            />
          {persons}
        </div>
    );
  }
}

export default App;