import React, { Component } from 'react';
import Calculator from '../components/Calculator'

class CalculatorPg extends Component {
  render() {
    return (
      <>
        <main>
          <h2>Calculator</h2>
          <Calculator />
        </main>
        <footer>Photo by Clem Onojeghuo on Unsplash</footer>
      </>

    );
  }
}

export default CalculatorPg;