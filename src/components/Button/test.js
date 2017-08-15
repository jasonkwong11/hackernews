import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {Button, Loading, ButtonWithLoading} from '../Button';

describe('Button', () => {
  const props = {
    onClick: undefined,
    className: ''
  }

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button {...props}>
        Give Me More
      </Button>, div);
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Button {...props}>
        Give Me More
      </Button>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('Loading', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div)
  });

  test('snapshots', () => {
    const component = renderer.create(
      <Loading />
    )
    let tree = component.toJSON
    expect(tree).toMatchSnapshot();
  })
})

