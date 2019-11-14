import React from 'react';
import Card from './Card';
import './List.css';

export default class List extends React.Component {
  static defaultProps = {
    header: '',
    cards: [],
  }
  render() {
    return (
      <section className='List'>
        <header className='List-header'>
          {this.props.header}
        </header>
        <div className='List-cards'>
          {this.props.cards.map((card) => 
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              />
          )}
          <button 
            type='button'
            onClick={() => this.props.onCreateRandom()}
          >
            + Add Random Card
          </button> 
        </div>
      </section>
    )
  }
}