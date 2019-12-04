import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
class App extends Component {

  state = {
    person: [
      {id: 12, age: 25},
      {id: 13, age: 66}
    ],

    showPerson: false
  }

deletePerson = (personIndex) => {
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({person: persons})
}

  chnageAge = (event, id) => {
    const personIndex =  this.state.person.findIndex(p => {
      return p.id === id;
    })

    const s = {
      ...this.state.person[personIndex]
    };
    
    s.age = event.target.value;

    const person = [...this.state.person];

    person[personIndex] = s;

    this.setState({
      person: person
    })
  }

  toggleContent = () => {
      const doesShowPerson =  this.state.showPerson;
      this.setState({showPerson : !doesShowPerson})
  }

  render() {
     
    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            click={() => this.deletePerson(index)}
            age={person.age} 
            key={person.id}
            change={(event) => this.chnageAge(event, person.id)}
            />
          })
          }
        </div>
      )
    }

    const classes = [];
    if(this.state.person.length <= 1) {
      classes.push('green');
    }

    if(this.state.person.length <= 0) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>This app component</h1>
        <p className={classes.join(" ")}>Paragraph</p>
        <button onClick={this.toggleContent}>switch</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
