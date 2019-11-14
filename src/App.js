import React, { Component } from 'react';
import Important from './Important.js';
import Dropdowns from './Dropdowns.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          title: 'Development',
          links: ['Learn Rockwood history', '20th Century', 'Notable People', 'Early History'],
          cards: [{
            header: 'Rockwood is situated around a series of roads',
            link: 'Buy your souvenir',
            image: 'https://www.iconsdb.com/icons/preview/pink/square-xxl.png'
          }]
        },
        {
          title: 'Briggs City',
          links: ['Link 1', 'Link 2', 'Link 3']
        },
        {
          title: 'Red-winged warbler',
          links: ['Link 1', 'Link 2', 'Link 3']
        },
        {
          title: `In the early 20th century, Rockwood's economy further diversified`,
          links: ['Learn More']
        },
        {
          title: 'Education',
          links: ['Link 1', 'Link 2', 'Link 3']
        },
        {
          title: 'The House of Rothschild',
          links: ['Link 1', 'Link 2', 'Link 3']
        },
      ]
    };
  }

  componentDidMount() {}

  render() {

    return (
      <React.Fragment>
        <Important/>
        <Dropdowns subjects={this.state.subjects}/>
      </React.Fragment>
    );
  }
}

export default App;


