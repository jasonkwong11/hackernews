import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App, { Search, Button, Table, Loading } from './App';

describe('App', () => {

  const props = {
    results: null,
    searchKey: '',
    searchTerm: 'redux',
    isLoading: true,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App { ...props } />, div);
  });
});

describe('Search', () => {
  const props = {
    onChange: () => {},
    onSubmit: () => {},
  }
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Search {...props}>
      Search
      </Search>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <Search>Search</Search>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});

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
describe('Table', () => {

  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y'},
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z'},
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
    onDismiss: () => {}
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2);
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Table { ...props } />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
