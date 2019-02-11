import React, {Component} from 'react';


import classes from './Person.css';

class Person extends Component {
//    constructor(props){
//        super(props);
//        console.log('[Person.js] Inside Constructor', props);
//      }
//      componentWillMount() {
//        console.log('[Person.js] Inside componentWillMount()');
//      }
//    componentDidMount(){
//      console.log('[Person.js] Inside componentDidMount()');
//    }
//const person = (props) => {
   render() {
        console.log('[Person.js] rendering...');
        const {name, age, children, click}=this.props
        return (
          <div className={classes.Person} >
              <p onClick= {click}>
                `I'm ${name} and I am ${age} years old `
              </p>
          <p>{children}</p>
          <input
            onChange={this.props.changed} 
            type="text" 
            value={this.props.name}
          />
          </div>
          );
      }
       
    }
export default Person;