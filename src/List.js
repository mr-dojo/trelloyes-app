import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        {props.header}
      </header>
      <div className='List-cards'>
        {props.cards.map((card) => 
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onDeleteCard={props.onDeleteCard}              
          />
        )}
        <button 
          type='button'
          onClick={() => props.onCreateRandom(props.id)}
        >
          + Add Random Card
        </button> 
      </div>
    </section>
  )
}

List.defaultProps = {
  onCreateRandom: () => {},
}