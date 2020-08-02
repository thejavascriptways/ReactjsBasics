import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Valdation';
import Char from './Char/Char';


class App extends Component {

 state ={
  userInput : ''
 };

 inputChangedHandler = (event) =>{
  this.setState (
    {
      userInput : event.target.value
    });
 }

 deleteCharHandler = (index) => {
   const text = this.state.userInput.split('');
   text.splice(index,1);
   const newText = text.join('');
   this.setState ({
     userInput: newText
   });
 }

 render(){
  let charList = this.state.userInput.split('').map((char,index)  => {
    return  <Char 
              input ={char} 
              key ={index}
              click = {() => this.deleteCharHandler(index)}/>
  });

  return(
    <div>
      <input 
      type="text" 
      onChange={this.inputChangedHandler} 
      value={this.state.userInput}>
      </input>
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length} />

      {charList}

    </div>
  )
 }


  // state = {
  //   persons : [
  //     {id: '1', name : 'Messi', age: 30},
  //     {id: '2', name : 'Ronaldo', age: 33},
  //     {id: '3', name : 'Mpappe', age: 26}
  //   ],
  //   otherState:'some other state value',
  //   showPersons: false
  // };

  // switchNameHandler = (newName) => {
  //   this.setState(
  //     {
  //       persons:[
  //         {id : '1', name : newName, age: 30},
  //         {id : '2', name : 'Ronaldo', age: 33},
  //         {id : '3', name : 'Mpappe', age: 28}
  //       ] 
  //     })
  // };
  
  // nameChangedHandler = ( event, id ) => {
  //   const personIndex = this.state.persons.findIndex( p => p.id === id);

  //   const person = {...this.state.persons[personIndex]};

  //   person.name = event.target.value;

  //   const newPersons = [...this.state.persons];
  //   newPersons[personIndex] = person;
    
  //   this.setState({persons: newPersons});
  // };

  // deletePersonHandler = (index) => {
  //  //  const persons = this.state.persons;// this approach has a flaw instead use spread operator
  //  // const person = this.state.persons.clice() alternative 
  //  const persons = [...this.state.persons]; //best option
  //   persons.splice(index, 1);
  //   this.setState({persons: persons});
  // }

  // togglePersonHandler = () =>{
  //   const show = this.state.showPersons;
  //   this.setState ({showPersons: !show})
  // }

  // render() {

  //   const style = {
  //     backgroundColor: 'white',
  //     font: 'inherit',
  //     border: '1px solid blue',
  //     padding: '8px',
  //     cursor: 'pointer'
  //   }

  //   let persons = null;

  //   if( this.state.showPersons){
  //     persons = (
  //       <div> 
  //         {this.state.persons.map((person, index)=> {
  //           return <Person
  //             click = {() => this.deletePersonHandler(index)}
  //             changed = {(event) => this.nameChangedHandler(event,person.id)}
  //             name ={person.name} 
  //             age = {person.age}
  //             key = {person.id} />              
  //         })}
  //      </div>
  //     )
  //   }

  //   return (
  //     <div className="App">

  //       <h1>React app!!</h1>
  //       <button 
  //       style={style}
  //       onClick={this.togglePersonHandler}>Show/Hide
  //       </button>
  //       {persons}
        
       
  //     </div>
  //   );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
  //}
}

export default App;