import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';


const Dropdowns = ({ subjects }) => {

    return (
      <Accordion className='accordion' allowMultiple='false'>
        {subjects.map(item => {
         if (item.links.length === 1) {
           return (
            <div className='accordionNoLinks'>
              <div className='accordionTitle'> {item.title} </div>
              <div className='learnMore'> Learn More </div>
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
                   <div>
                    <div> {card.header} </div>
                    <div> {card.link} </div>
                    <div className="accordionImage">
                    <img src={card.image} alt=""/>
                  </div>
                  </div>
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