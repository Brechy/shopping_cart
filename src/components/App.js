import React, { Component } from 'react';
import '../css/App.css';
import '../css/Index.css';
import CartHeader from '/.CartHeader';


class App extends Component {
  render() {
    return (
      <div className="App">
      <CartHeader/>
      </div>
    )
  }
}

export default App;
