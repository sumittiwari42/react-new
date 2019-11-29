import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

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

  chnageAgeInput = (event, id) => {
    this.setState({
      person: [
        {age: event.target.value},
        {age: 44}
      ]
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
            chnaged={this.chnageAgeInput}
            />
          })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>This app component</h1>
        <button onClick={this.toggleContent}>switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
