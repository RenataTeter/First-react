import React, {Component} from 'react';
import Person from './PersonA/Person';


class Persons extends Component {
  //  static getSDerivedStateFromProps(props, state){
    //console.log('[Person.js] getSDerivedStateFromProps');
      //return state;
  //  }
    shouldComponentUpdate(nextProps, nextState){
      console.log('[Persons.js] shouldComponentUpdate');
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('[Persons.js] getSnapshotBeforeUpdate');
      return {message: 'Snapshot!'};
    }
     componentDidUpdate (prevProps, prevState, Snapshot) {
       console.log('[Persons.js] componentDidUpdate');
       console.log(Snapshot);
    }
    render()  {
      // console.log('[Persons.js] Inside Constructor');
        
     
  //    componentWillMount() {
  //      console.log('[Persons.js] Inside componentWillMount()');
  //    }
  // 
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
 

    console.log('[Persons.js] rendering...');
   
    return this.props.persons.map((person, index) => {
        
      return (
      <Person 
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed = {event => this.props.changed(event, person.id)}/>);
      } );
    }
  }

  export default Persons;