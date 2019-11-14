import React from 'react';

const UpcomingEvents = ({ events }) => {

    return (
      <div>
        {events.map(event => {
          return (
            <div>
              <div className="eventImage">
                <img src={event.image} alt=""/>
              </div>
              <div> {event.title} </div>
              <div> {event.text} </div>
              <div> {event.link} </div>

            </div>
            )
        })}

      </div>
    );
};
export default UpcomingEvents;