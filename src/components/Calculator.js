import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: ""
    }
  }

  clearCalculator = () => {
    this.setState({ result: "" })
  }

  buttonClicked = (e) => {
    this.setState({ result: this.state.result + e.target.innerText })
  }

  calculate = () => {
    console.log(this.state.result)
  }

  render() {
    return (
      <>
        <article id="calculator">
          <div className="top">
            <span className="top-screen"></span>
            <div className="input-screen">{this.state.result}</div>
          </div>

          <div className="keys">
            <button className="clear" onClick={this.clearCalculator}>ac</button>
            <button onClick={this.buttonClicked}>+/-</button>
            <button onClick={this.buttonClicked}>%</button>
            <button className="operator" onClick={this.buttonClicked}>÷</button>
            <button onClick={this.buttonClicked}>7</button>
            <button onClick={this.buttonClicked}>8</button>
            <button onClick={this.buttonClicked}>9</button>
            <button className="operator" onClick={this.buttonClicked}>x</button>
            <button onClick={this.buttonClicked}>4</button>
            <button onClick={this.buttonClicked}>5</button>
            <button onClick={this.buttonClicked}>6</button>
            <button className="operator" onClick={this.buttonClicked}>-</button>
            <button onClick={this.buttonClicked}>1</button>
            <button onClick={this.buttonClicked}>2</button>
            <button onClick={this.buttonClicked}>3</button>
            <button className="operator" onClick={this.buttonClicked}>+</button>
            <button onClick={this.buttonClicked}>0</button>
            <button onClick={this.buttonClicked}>.</button>
            <button className="operator double-space" onClick={this.calculate}>=</button>
          </div>
        </article >
      </>
    );
  }
}

export default Calculator;



// 1. [x] get input of buttons to display on top screen

// >>1a. text gets smaller with more numbers