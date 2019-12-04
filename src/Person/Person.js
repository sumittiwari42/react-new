import React from 'react';
import Radium from 'radium';
import "./Person.css";

const person = (props) => {
  const style = {
    '@media (min-width: 600px)' : {
      width: '500px'
    }
  }
  return (
  <div style={style} className="style">
    <p onClick={props.click}>This is person components! and age is {props.age}</p>
   <input type="text" onChange={props.change}/> 
  </div>
  );
}

export default Radium(person);