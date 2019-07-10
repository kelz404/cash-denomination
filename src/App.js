import React, { Component } from 'react';

import Input from './containers/Input';
import Denomination from './components/Denomination';
import convert from './utils/convert';

export class App extends Component {
  state = {
    denomination: [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50],
    results: [],
  };

  convertResult = val => {
    const results = convert(this.state.denomination, val);
    this.setState({ results });
  };

  render() {
    return (
      <div className="app container text-center">
        <div className="logo mx-auto">
          <img src="images/tokopedia-logo.png" alt="Tokopedia" className="img-fluid mt-3" />
          <span className="logo__caption">Assessment</span>
        </div>
        <h3 className="app__title mt-4 mb-0 p-2">Cash Denomination</h3>

        <Input getResult={this.convertResult} />
        <div className="border-bottom border-success w-50 mx-auto" />
        <Denomination results={this.state.results} />
      </div>
    );
  }
}

export default App;
