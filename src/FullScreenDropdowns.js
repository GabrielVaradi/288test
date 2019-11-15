import React from 'react';
import { Card } from 'react-bootstrap';


const FullScreenDropdowns = ({ subjects }) => {

    return (
      <div className ='fullScreenDropdowns'>
        {subjects.map(item => {
         if (item.links.length === 1) {
           return (
            <Card className='fullScreenThemesOneLink'>
              <Card.Text className='oneLinkCard'> {item.title} </Card.Text>
              <Card.Link className='oneLink' href="#">{item.links}</Card.Link>
            </Card>
            )
         }
          return (
            <Card className='fullScreenThemes'>
              <div className='fullScreenTitles'>
                <Card.Title className='fullScreenThemeTitle'> {item.title} </Card.Title>
                <Card.Title className='fullScreenThemeTitleLink'> {item.titleLink} </Card.Title>
              </div>
                {item.links.map(link => {
                  return (
                  <div className='fullScreenThemeLink'>{link}</div>)
                })}


                  {item.cards.map(card => {
                   return (
                   <Card className='fullScreenCard'>
                    <Card.Body className='fullScreenCardBody'>
                      <Card.Text className='fullScreenCardText'>
                        {card.header}
                      </Card.Text>
                      <Card.Link className='fullScreenCardLink 'href="#">{card.link}</Card.Link>
                      <i class="fa fa-angle-right"></i>
                    </Card.Body>
                    <Card.Img  className='fullScreenCardImage' src={card.image} />
                  </Card>
                  )
                })}


            </Card>
          );
        })}
      </div>
    );
};
export default FullScreenDropdowns;

