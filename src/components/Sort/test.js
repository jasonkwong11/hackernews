import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Sort from './index';


describe('Sort', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sort/>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <Sort/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})