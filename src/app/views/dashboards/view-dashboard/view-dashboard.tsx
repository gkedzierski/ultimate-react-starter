import * as React from 'react';

const style = require('./view-dashboard.scss');

export class ViewDashboard extends React.Component {
  public render(): JSX.Element {
    return <h1 className={style.dashboard}>Dashboard</h1>;
  }
}
