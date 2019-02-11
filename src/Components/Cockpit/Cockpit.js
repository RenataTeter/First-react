import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {

   // useEffect(() => {
    //console.log('[Cockpit.js] useEffect');
    //Http request...
     // setTimeout(() => {
     // alert('Saved data to cloud!');
     // }, 1000);
    //});
    //  let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <=2 ) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
      
    }

    return(
        <div className={classes.Cockpit}>
            <h1> Hello React App { props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>It is easy!!! This is really working :)</p>
        <button 
       className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
export default cockpit;