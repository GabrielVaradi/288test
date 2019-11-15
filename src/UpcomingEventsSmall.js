import React from 'react';
import { Card } from 'react-bootstrap';


const UpcomingEventsSmall = ({ events }) => {

    return (
      <div>
        {events.map(event => {
          return (
            <Card className='eventCardsSmall'>
                    <Card.Img className='eventCardImageSmall' variant="top" src={event.image} />
                    <Card.Title className='eventCardTitleSmall'>{event.title}</Card.Title>
                    <Card.Body className='eventCardBodySmall'>
                      <Card.Text className='eventTextSmall'>
                        {event.text}
                      </Card.Text>
                      <Card.Link className='eventLinkSmall' href="#">{event.link}
                      <i class="fa fa-angle-right"></i>
                      </Card.Link>
                    </Card.Body>
                  </Card>
            )
        })}

      </div>
    );
};
export default UpcomingEventsSmall;