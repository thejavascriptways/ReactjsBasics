import React, {Component} from 'react';
import classPerson from './Person.css';



class Person extends Component{

    static getDerivedStateFromProps=(props, state) =>{
        console.log('Person.js getDerivedStateFromProps');
        console.log(props);
        console.log(state);
        return state;
      }
    
      shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Person.js shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        return true;
      }
    
      getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('Person.js getSnapshotBeforeUpdate');
        console.log(prevProps);
        console.log(prevState);
        return true;
      }
    
      componentDidUpdate = () =>{
        console.log('Person.js componentDidUpdate');
      }

    render(){
        console.log('Person.js render');
        return (
            <div className={classPerson.Person}>
                <p onClick ={this.props.click}>I am {this.props.name} and my age is {this.props.age} </p>
                <p>{this.props.children}</p>
                <input type ="text" onChange={this.props.changed} value ={this.props.name}/>
            </div>
            )
        };
    }
    
export default Person;