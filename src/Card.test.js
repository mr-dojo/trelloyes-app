import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('Card componenet', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title='Test' content='Content Sample Paragraph' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('Renders the UI with no changes', () => {
    const tree = renderer
      .create(<Card title='Test' content='Content Sample Paragraph'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});