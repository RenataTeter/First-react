import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
// add new style,  @media is anderstand i Radium
const style = {
    '@media (min-width: 500px)':{
        width: '250px',
        backgroundColor: '#ddd'
    }
};

    return (
    <div className='Person' style={style}>
        <p onClick= {props.click}>I'm {props.name} and I am { props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    
    )
};

export default Radium(person);