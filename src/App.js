import React, { Component } from 'react';
import Important from './Important.js';
import Dropdowns from './Dropdowns.js';
import UpcomingEvents from './UpcomingEvents.js';
import UpcomingEventsSmall from './UpcomingEventsSmall.js';
import NeedHelp from './NeedHelp.js';
import FullScreenDropdowns from './FullScreenDropdowns.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          title: 'Development of Rockwood',
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
          titleLink: 'Learn More',
          cards: []
        },
        {
          title: 'Red-winged warbler',
          titleLink: 'See all birds',
          links: [],
          cards: [
          {
              header: 'The red-winged warbler is a bird species in the family Cisticolidae',
              link: 'Learn more',
              image: 'http://www.annemillsrecruitment.co.uk/wp-content/uploads/2016/02/Dark-Grey-Square-300x270.jpg'
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
              image: 'https://www.roze.co.uk/ekmps/shops/rozepetal/images/bothside-same-coloured-paper-l-blue-6-inch-15-cm-square-15-sheets-ok050--3294-p.gif'
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
          image: 'https://www.roze.co.uk/ekmps/shops/rozepetal/images/bothside-same-coloured-paper-l-blue-6-inch-15-cm-square-15-sheets-ok050--3294-p.gif'
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
          <UpcomingEventsSmall events={this.state.upcomingEvents}/>
          <NeedHelp/>
        </div>
          <FullScreenDropdowns subjects={this.state.subjects}/>
      </div>
    );
  }
}

export default App;


