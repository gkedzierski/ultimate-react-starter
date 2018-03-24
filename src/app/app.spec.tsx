import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from './app';

describe('App', () => {
  it('should render', () => {
    const root = shallow(<App />);

    expect(root.exists()).toBeTruthy();
  });
});
