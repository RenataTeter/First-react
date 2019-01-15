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

switchName = (newName)=> {
//console.log('Was clicked!');
// don't do THIS !!!:   this.state.persons[0].name = 'Maxymilan';
this.setState({
  persons: [
    {name: newName, age: 28},
    {name: 'Many', age: 15},
    {name: 'Mirinda', age: 23}
  ]
})
}

nameChangeHandler = (event) =>{
  this.setState({
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Mirinda', age: 23}
    ]
  })

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


    return (
      <div className="App">
      <h1> Hello App</h1>
      <p>Take it easy!!!</p>
      <button 
      style= {style}
      onClick={ this.togglePersonsHandler}>Switch Name</button>

      { this.state.showPersons ?
      <div>
      <Person name = {this.state.persons[0].name} 
      age = {this.state.persons[0].age}/>
      <Person name = {this.state.persons[1].name} 
      age = {this.state.persons[1].age}
      click = {this.switchName.bind(this, 'Max!')}
      changed={this.nameChangeHandler} />My hobby bla bla.
      <Person name = {this.state.persons[2].name} 
      age = {this.state.persons[2].age}/>
      </div> : null
    }
      </div>
    
    );
  // return React.createElement('div', null, React.createElement('h1',null,  'I\'m a React App'));
  }
}

export default App;
