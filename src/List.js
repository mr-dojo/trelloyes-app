import React from 'react';
// import Card from './Card.js';

export default function List(props) {

  return (
    <section className='List'>
      <header className='List-header'>
        {props.header}
      </header>
      <div className='List-cards'>
        {props.cards}
      </div>
    </section>
  )
}
// return an array of card components