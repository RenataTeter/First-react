import React from 'react';
import Person from './PersonA/Person';
const persons = props => {
    
    //    console.log('[Persons.js] Inside Constructor', props);
        
   //   }
  //    componentWillMount() {
  //      console.log('[Persons.js] Inside componentWillMount()');
  //    }
  //  componentDidMount(){
  //    console.log('[Persons.js] Inside componentDidMount()');
  //  }
  //  componentWillReceiveProps (nextProps) {
  //      console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  //  }
  //  shouldComponentUpdate (nextProps, nextState) {
  //      console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //      return nextProps.persons !== this.props.persons;
  //  }
  //  componentWillUpdate ( nextProps, nextState) {
  //      console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  //  }
  //  componentDidUpdate () {
  //      console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  //  }

    console.log('[Persons.js] rendering...');
   
    return props.persons.map((person, index) => {
        
      return (
      <Person 
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed = {event => props.changed(event, person.id)}/>);
      } );
};

  export default persons;