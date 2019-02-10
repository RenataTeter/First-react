import React from 'react';


import classes from './Person.css';

//class Person extends Component {
//    constructor(props){
//        super(props);
//        console.log('[Person.js] Inside Constructor', props);
//        
//      }
//      componentWillMount() {
//        console.log('[Person.js] Inside componentWillMount()');
//      }
//    componentDidMount(){
//      console.log('[Person.js] Inside componentDidMount()');
//    }
const person = (props) => {
   
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
                <p onClick= {props.click}>I'm {props.name} and I am { props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            </div>
            
            )
    }


export default person;