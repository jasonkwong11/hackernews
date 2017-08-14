import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, { Search, Button, Table } from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Search', () => {
  const mockOnChange = () => {} 
  const mockonSubmit = () => {}

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Search 
        onChange={ mockOnChange }
        onSubmit={ mockonSubmit }
        >
      Search
      </Search>, div);
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Button', () => {
  const mockOnClick = () => {}

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button onClick={ mockOnClick }>
        Give Me More
      </Button>, div);
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Button onClick={ mockOnClick }>
        Give Me More
      </Button>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
