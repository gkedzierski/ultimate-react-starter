import { shallow } from 'enzyme';
import * as React from 'react';

import { ViewDashboard } from './view-dashboard';

describe('ViewDashboard', () => {
  it('should render', () => {
    const root = shallow(<ViewDashboard />);

    expect(root.exists()).toBeTruthy();
  });
});
