import React from 'react'
import {Card} from './Card' 

//The Cardlist function take an array of data (github user profiles) and use the Card function as a template to output them


export function Cardlist(props) {
    return(
    <div className='avatars'>
        {props.cards.map(card => (
            //the three dots is a shorthand for saying the Card will 'spread' an array of (some) items
            //I don't quite see why would not just use 'card' here 
            <Card key={card.id} {...card}/>
        ))}
    </div>
    )
}
