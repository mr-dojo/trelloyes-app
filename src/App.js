import React from 'react';
import List from './List.js';
import './App.css';

class App extends Comment {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  
  render () {
    const { store } = this.props
    return(
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloys!</h1>
          <div className='App-list'>
            {store.lists.map(list => (
              <List 
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => store.allCards[id])}
              />
            ))}
          </div>
        </header>
      </main>
    );
  }
}

export default App;
