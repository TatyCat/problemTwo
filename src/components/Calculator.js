import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  calculator() {

  }

  render() {
    return (
      <>
        <article id="calculator">
          <div className="top">
            <span className="top-screen"></span>
            <div className="input-screen">009</div>
          </div>

          <div className="keys">
            <button className="clear">ac</button>
            <button>±</button>
            <button>%</button>
            <button className="operator">÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="operator">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="operator">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="operator">+</button>
            <button>0</button>
            <button>.</button>
            <button className="operator double-space">=</button>
          </div>
        </article >
      </>
    );
  }
}

export default Calculator;



// 1. get input of buttons to display on top screen

// 2. text gets smaller with more numbers