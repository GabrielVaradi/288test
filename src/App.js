import React, { Component } from 'react';
import Important from './Important.js';
import Dropdowns from './Dropdowns.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {

    return (
      <React.Fragment>
        <Important/>
        <Development/>
      </React.Fragment>
    );
  }
}

export default App;
