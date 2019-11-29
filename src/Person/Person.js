import React from 'react';
import "./Person.css";

const person = (props) => {
  return (
  <div className="style">
    <p onClick={props.click}>This is person components! and age is {props.age}</p>
    <input type="text" onChange={props.changed}/>
  </div>
  );
}

export default person;