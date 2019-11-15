import React from 'react';
import { Card, Button } from 'react-bootstrap';


const UpcomingEvents = ({ events }) => {

    return (
      <div>
        {events.map(event => {
          return (
            <Card className='eventCards'>
                    <Card.Title className='eventCardTitle'>{event.title}</Card.Title>
                    <Card.Img className='eventCardImage' variant="top" src={event.image} />
                    <Card.Body>
                      <Card.Text className='eventText'>
                        {event.text}
                      </Card.Text>
                      <Button className='eventButton' variant="primary">{event.link}</Button>
                    </Card.Body>
                  </Card>
            )
        })}

      </div>
    );
};
export default UpcomingEvents;