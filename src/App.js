import React, { Component } from 'react';
import Form from './Form';
import CardContainer from './CardContainer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ideas: []};
  }

  addCard = (cardInfo) => {
    // adds a new card to this.state array
    // needs to be called on another Child component
    this.setState({ideas: [...this.state.ideas, cardInfo]})
  }

  render() {
    return (
      <div> 
        <Form addCard={this.addCard} /> 
        <CardContainer 
          ideas={this.state.ideas} 
          removeCard={this.deleteCard} 
        /> 
      </div>
    )
  }

  deleteCard = (cardId) => {
    console.log('here i am!')
    const remainingCards = this.state.ideas.filter(ideaCard => {
      return ideaCard.id !== cardId
    })
    this.setState({ideas: remainingCards})
  }
}

export default App;


// nested inside main App class
// form component
// area for all saved cards
// in Card Container  - will have a nested Ideas component inside it. 

// pass down the props
// push up the actions

/* whatever the name is on line 20, is what it will be called in child component */
/* ... spread operator */
