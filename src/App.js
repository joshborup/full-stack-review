import React, { Component } from 'react';

import routes from './router';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;
