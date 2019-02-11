import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor');
  }
state = {
      persons: [
        { id: 'gfffhh', name: 'Max', age: 28},
        {id: 'yryt', name: 'Many', age: 45},
        {id: 'gfru', name: 'Mirinda', age: 23}
      ],
      otherState: 'some other value',
      showPersons: false
    };
 static getDerivedStateFromProps(props, state){
   console.log('[App.js] getDerivedStateFromProps', props);
   return state;
 }
//componentWillMount() {
//  console.log('[App.js] Inside componentWillMount()');
//  }
componentDidMount(){
 console.log('[App.js] Inside componentDidMount');
}
shouldComponentUpdate (nextProps, nextState) {
 console.log('[ App.js] shouldComponentUpdate', nextProps, nextState);
 // return nextProps.persons !== this.props.persons;
 return true;
}
//componentWillUpdate ( nextProps, nextState) {
//  console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
//}
componentDidUpdate () {
  console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
     persons={this.state.persons}
     clicked={this.deletePersonHandler}
     changed={this.nameChangeHandler} />;
    
    }

    return (      
      <div className={classes.App}>
 <Cockpit 
 appTitle={this.props.appTitle}
showPersons={this.state.showPersons}
persons={this.state.persons}
clicked={this.togglePersonsHandler}/>
      {persons}
           </div>
      
    );
  // return React.createElement('div', null, React.createElement('h1',null,  'I\'m a React App'));
  }
}

export default App;


