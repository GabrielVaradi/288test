import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';


const Dropdowns = ({ subjects }) => {

    return (
      <Accordion className='accordion' allowMultiple='true'>
        {subjects.map(item => {
          return (
            <AccordionItem title={`${item.title}`} expanded={item === 1} className='accordionItem' expandedClassName='accordionExpanded' titleClassName='accordionTitle' bodyClassName='accordionBody'>
                {item.links.map(link => {
                  return (
                  <div>{link}</div>)
                })}
                {item.cards &&
                  <div> {item.title} </div>
                }

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