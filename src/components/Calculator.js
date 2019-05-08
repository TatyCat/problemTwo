/* eslint no-eval: 0 */
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: "",
      numberPressed: "",
      numberSet: "",
      operator: []
    }
  }

  clearCalculator = () => {
    this.setState({ result: "" })
    this.setState({ numberPressed: "" })
    this.setState({ numberSet: [] })
    this.setState({ operator: [] })
  }

  componentDidMount() { this.clearCalculator() }

  togglePositivity = () => {
    this.setState({ numberPressed: Math.sign(this.state.numberPressed) < 0 ? Math.abs(this.state.numberPressed) : -Math.abs(this.state.numberPressed) })
  }

  percent = () => {
    this.setState({ numberPressed: parseFloat(this.state.numberPressed / 100).toFixed(2) })

    // 72 +5% = 3.6  === (72 * 5% ==3.6)
    // 5% + 72 = 72.05
    // 5% = .05 x 10 = 40
    //  40 x 25% converts to 10 automatically 
    // 25% x 40 = 10
  }


  addNumber = (e) => {
    if (this.state.result !== "") {
      this.clearCalculator()
      this.setState({ numberPressed: this.state.numberPressed + e.target.innerText })
    } else if (this.state.result === "") {
      if (e.target.innerText === "%") {
        this.percent()
      } else if (e.target.innerText !== "%") {
        this.setState({ numberPressed: this.state.numberPressed + e.target.innerText })
      }
    }
  }

  operator = (addOperator) => {
    if (this.state.operator.length !== 0) {
      this.setState({ operator: addOperator })
    }
    this.setState({ numberSet: this.state.numberSet.concat(this.state.numberPressed) })
    this.setState({ numberPressed: "" })
    this.setState({ operator: addOperator })
  }

  calculate = () => {
    if (this.state.result === "") {
      this.setState({ numberSet: this.state.numberSet.concat(this.state.numberPressed) })

      this.setState({ numberPressed: "" })

      this.setState({ result: eval(`${this.state.numberSet} ${this.state.operator} ${this.state.numberPressed}`) })
    }
  }

  render() {
    return (
      <>
        <article id="calculator">
          <div className="top">
            <span className="top-screen"></span>
            <div className="input-screen">{this.state.numberPressed}{this.state.result}</div>
          </div>

          <div className="keys">
            <button className="clear" onClick={this.clearCalculator}>ac</button>
            <button onClick={this.togglePositivity}>+/-</button>
            <button onClick={this.addNumber}>%</button>
            <button className="operator" onClick={() => { this.operator("/") }}>÷</button>
            <button onClick={this.addNumber}>7</button>
            <button onClick={this.addNumber}>8</button>
            <button onClick={this.addNumber}>9</button>
            <button className="operator" onClick={() => { this.operator("*") }}>x</button>
            <button onClick={this.addNumber}>4</button>
            <button onClick={this.addNumber}>5</button>
            <button onClick={this.addNumber}>6</button>
            <button className="operator" onClick={() => { this.operator("-") }}>-</button>
            <button onClick={this.addNumber}>1</button>
            <button onClick={this.addNumber}>2</button>
            <button onClick={this.addNumber}>3</button>
            <button className="operator" onClick={() => { this.operator("+") }}>+</button>
            <button onClick={this.addNumber}>0</button>
            <button onClick={this.addNumber}>.</button>
            <button className="operator double-space" onClick={this.calculate}>=</button>
          </div>
        </article >
      </>
    );
  }
}

export default Calculator;



// 1. [x] get input of buttons to display on top screen
// 2. [x] +/- button toggle
// 3. [] Chained operators and numbers 
// 3. [] Check accuracy of calculator


// >>1a. text gets smaller with more numbers
