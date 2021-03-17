import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomeComponent from './index';

import store from '../../store';

describe('Home Component', () => {
  it('Renders', () => {
    const tree = renderer
      .create(<Provider store={store}><HomeComponent /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
