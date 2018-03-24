import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ViewDashboard } from './views/dashboards/view-dashboard/view-dashboard';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={ViewDashboard} />
        </div>
      </Router>
    );
  }
}
