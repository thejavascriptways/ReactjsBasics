import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons:[
      { name : 'Messi', age: 30},
      { name : 'Ronaldo', age: 33},
      { name : 'Mpappe', age: 28}
    ]
  });

  const [fooState, setfooState] = useState('This is the foo state');


  const switchNameHandler = () => {
    setPersonState(
      {
        persons:[
          { name : 'Leo Messi', age: 32},
          { name : ' Chris Ronaldo', age: 33},
          { name : 'Mpappe', age: 28}
        ] 
      })
    setfooState("This is updated foo state")
  }; // end of switchHandler
  
  return (
    <div className="App">
      <h1>First React Application!</h1>
      <button onClick={switchNameHandler}>Switch</button>
      <Person 
        name ={personState.persons[0].name} 
        age ={personState.persons[0].age}>
      </Person>
      <Person 
        name ={personState.persons[1].name} 
        age ={personState.persons[1].age}> I am a soccer player!
      </Person>
      <Person 
        name ={personState.persons[2].name} 
        age ={personState.persons[2].age}>I am {personState.persons[2].name}
      </Person>
      <h6>
        {fooState}
      </h6>
    </div>
  );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'React works!'));
}


export default app;
