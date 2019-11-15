import React from 'react';
import { Card } from 'react-bootstrap';


const FullScreenDropdowns = ({ subjects }) => {

    return (
      <div className ='fullScreenDropdowns'>
        {subjects.map(item => {
         if (item.links.length === 1) {
           return (
            <Card className='fullScreenThemes'>
              <Card.Text> {item.title} </Card.Text>
              <Card.Link href="#">{item.links}</Card.Link>
            </Card>
            )
         }
          return (
            <Card className='fullScreenThemes'>
              <Card.Title> {item.title} </Card.Title>
                {item.links.map(link => {
                  return (
                  <div>{link}</div>)
                })}

                  {item.cards.map(card => {
                   return (
                   <Card>
                    <Card.Img  className='fullScreenCardImage' variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Text>
                        {card.header}
                      </Card.Text>
                      <Card.Link href="#">{card.link}</Card.Link>
                    </Card.Body>
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

