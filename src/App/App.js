import React, {Component} from 'react';
import './App.css';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <PersonalInfo />
    ) 
  }
}

export default App;
