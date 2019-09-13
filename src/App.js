import React from 'react';
import './App.css';
import {Form} from './components/Form'
import {Cardlist} from './components/Cardlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
    this.addNewCard = this.addNewCard.bind(this)
  }
  
  addNewCard(cardInfo){
    console.log("Card info", cardInfo);
    this.setState({
      //Concat adds the new cardinfo to the existing
      cards: this.state.cards.concat(cardInfo)
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard}/>
        <Cardlist cards={this.state.cards}/>
      </div>
    );  
  }
}

export default App;
