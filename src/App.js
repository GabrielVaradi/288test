import React, { Component } from 'react';
import Important from './Important.js';
import Dropdowns from './Dropdowns.js';
import UpcomingEvents from './UpcomingEvents.js';
import NeedHelp from './NeedHelp.js';
import FullScreenDropdowns from './FullScreenDropdowns.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          title: 'Development',
          links: ['Learn Rockwood history', '20th Century', 'Notable People', 'Early History'],
          cards: [
            {
              header: 'Rockwood is situated around a series of roads',
              link: 'Buy your souvenir',
              image: 'https://www.iconsdb.com/icons/preview/pink/square-xxl.png'
            }
          ]
        },
        {
          title: 'Briggs City',
          links: ['History of this town', 'Where is Briggs', 'Further reading'],
          cards: []
        },
        {
          title: 'Red-winged warbler',
          links: [],
          cards: [
          {
              header: 'The red-winged warbler is a bird species in the family Cisticolidae',
              link: 'Learn more',
              image: 'https://www.iconsdb.com/icons/preview/pink/square-xxl.png'
          }
         ]
        },
        {
          title: `In the early 20th century, Rockwood's economy further diversified`,
          links: ['Learn More'],
          cards: [],
        },
        {
          title: 'Education',
          links: ['Mythological references', 'The Drowned Vault', 'Second installment', 'Equatorial room'],
          cards: [],
        },
        {
          title: 'The House of Rothschild',
          links: ['Rothschild', 'Plot', 'Cinematography', 'Reception'],
          cards: [
            {
              header: 'The House of Rothschild is available for free download',
              link: 'Learn more',
              image: 'https://www.iconsdb.com/icons/preview/pink/square-xxl.png'
            }
          ]
        },
        {
          title : 'Port Adelaide',
          links : ['Visit Page']
        }
      ],
      upcomingEvents : [
        {
          title : 'Upcoming events',
          text : 'In some cases an observatory would move to a new location, or the equatorial telescope itself would be removed',
          link : 'Get your tickets now',
          image: 'https://www.iconsdb.com/icons/preview/pink/square-xxl.png'
        }
      ]
    };
  }

  componentDidMount() {}

  render() {

    return (
      <div className='mainBox'>
        <div className='leftBox'>
          <Important/>
          <Dropdowns subjects={this.state.subjects}/>
          <UpcomingEvents events={this.state.upcomingEvents}/>
          <NeedHelp/>
        </div>
          <FullScreenDropdowns subjects={this.state.subjects}/>
      </div>
    );
  }
}

export default App;


