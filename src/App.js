import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot} from 'radium';
import Person from './PersonA/Person'

class App extends Component {
state = {
  persons: [
    { id: 'gfffhh', name: 'Max', age: 28},
    {id: 'yryt', name: 'Many', age: 45},
    {id: 'gfru', name: 'Mirinda', age: 23}
  ],
  otherState: 'some other value',
  showPersons: false
}

 nameChangeHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const person = {
     ...this.state.persons[personIndex]
   };
   // dawny sposob zapisu:  const person = Object.assign({}, this.state.persons[personIndex]); oldone way to wright code
   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;
   
   this.setState( {persons: persons});
 }
deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons: persons});
}




togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

  render() {
    const style ={
      backgroundColor: 'black',
      color: 'white',
      font: 'inherid',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color: 'black',
      }
    }

    let persons = null;
    if ( this.state.showPersons ){
persons = (
   <div>
  {this.state.persons.map((person, index) => {
   return <Person 
   click={() => this.deletePersonHandler(index)}
   name={person.name}
   age={person.age}
   key={person.id}
   changed = {(event) => this.nameChangeHandler(event, person.id)}/>
 }
 )}
  </div> 

);
style.backgroundColor = 'red';
style[':hover']={
  backgroundColor: 'salmon',
  color: 'black'
}
    }

    //  let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', bold']
      
    }

    return (
      <StyleRoot>
      <div className="App">
      <h1> Hello App</h1>
      <p className={classes.join('')}>Take it easy!!!</p>
      <button 
      style= {style}
      onClick={ this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
     
      </div>
      </StyleRoot>
    );
  // return React.createElement('div', null, React.createElement('h1',null,  'I\'m a React App'));
  }
}

export default Radium(App);
