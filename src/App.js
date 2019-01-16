import React, { Component } from 'react';
import './App.css';
import Person from './PersonA/Person'

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Many', age: 45},
    {name: 'Mirinda', age: 23}
  ],
  otherState: 'some other value',
  showPersons: false
}

 nameChangeHandler = (event) => {
   this.setState( {
     persons: [
       { name: 'Max', age: 28},
       { name: event.target.value, age: 29},
       { name: 'Marina', age: 30}
     ]
   })
 }
deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.split();
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
      backgroundColor: 'white',
      font: 'inherid',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
   changed = {(event) => this.nameChangeHandler()}/>
 }
 )}
  </div> 

);
    }


    return (
      <div className="App">
      <h1> Hello App</h1>
      <p>Take it easy!!!</p>
      <button 
      style= {style}
      onClick={ this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
     
      </div>
    
    );
  // return React.createElement('div', null, React.createElement('h1',null,  'I\'m a React App'));
  }
}

export default App;
