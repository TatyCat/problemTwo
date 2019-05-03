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
        <footer>
          <p>Photo by Clem Onojeghuo on Unsplash</p>
        </footer>
      </>
    );
  }
}

export default CalculatorPg;