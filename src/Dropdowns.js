import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import { Card } from 'react-bootstrap';


const Dropdowns = ({ subjects }) => {

    return (
      <Accordion className='accordion' allowMultiple='false'>
        {subjects.map(item => {
         if (item.links.length === 1) {
           return (
            <div className='accordionNoLinks'>
              <div className='accordionTitle'> {item.title} </div>
              <div className='learnMore'> {item.links}
              <i class="fa fa-angle-right"></i>
              </div>

            </div>
            )
         }
          return (
            <AccordionItem title={`${item.title}`} expanded={item === 1} className='accordionItem' expandedClassName='accordionExpanded' titleClassName='accordionTitle' bodyClassName='accordionBody'>
                {item.links.map(link => {
                  return (
                  <div>{link}</div>)
                })}

                  {item.cards.map(card => {
                   return (
                   <Card className='cards'>
                    <Card.Img className='cardImage' variant="top" src={card.image} />
                    <Card.Body className= 'cardBody'>
                      <Card.Text className= 'cardText'>
                        {card.header}
                      </Card.Text>
                      <Card.Link className='cardLink' href="#">{card.link}</Card.Link>
                      <i class="fa fa-angle-right"></i>
                    </Card.Body>
                  </Card>
                  )
                })}


            </AccordionItem>
          );
        })}
      </Accordion>
    );
};
export default Dropdowns;




//<i class="fa fa-sort-down"></i>

// <div className="image">
//                     <src={item.card.image} alt=""/>
//                   </div>