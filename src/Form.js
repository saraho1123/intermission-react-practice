import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', idea: '', id: null};
  }

  createCard = (event) => {
    event.preventDefault();
    this.props.addCard(
      {
        name: this.state.name,
        idea: this.state.idea,
        id: Date.now()
      }
    );
    this.setState({name: '', idea: '', id: null});
  }

  render() {
    return (
      <form className="form"> 
        <input className="input" name="name" value={this.state.name} onChange={this.changeHandler}> </input>
        <input className="input" name="idea" value={this.state.idea} onChange={this.changeHandler}> </input>
        <button type="submit" onClick={this.createCard}> Submit Card </button>
      </form>
    )
  }

  changeHandler = (event) => {
    console.log(event)
    this.setState({[event.target.name]: event.target.value})
  }
}

// props is a line of communication between parent compoennets (for both methods and data)
// on change attribut on the inputs
// handleChange method to call onChange
// look this up online
// this will change the state of this.state
// another method to call on this.setState inside handleChange method to set your input to be equal the event.target.value


//when referring to something from another class, use props.nameOfThing
export default Form;