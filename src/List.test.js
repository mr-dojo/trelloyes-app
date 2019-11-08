import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

const listComp = <List header='Test header' id='1' cards={[]}  />

describe('List componenet', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(listComp, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('Renders the UI with no changes', () => {
    const tree = renderer
      .create(listComp)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});