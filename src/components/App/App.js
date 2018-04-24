import React, { Component } from 'react';
import './App.css';
import ProductPanel from '../ProductPanel/ProductPanel'; 
import B from '../B/B'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductPanel />
        <B />
      </div>
    );
  }
}

export default App;
