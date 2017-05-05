import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "", num2: ""};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.div = this.div.bind(this);
    this.mult = this.mult.bind(this);
    this.clear = this.clear.bind(this);
  }

  add(e){
    e.preventDefault();
    this.setState({result: this.state.num1 + this.state.num2});
  }

  sub(e){
    e.preventDefault();
    this.setState({result: this.state.num1 - this.state.num2});
  }

  div(e){
    e.preventDefault();
    this.setState({result: this.state.num1 / this.state.num2});
  }

  mult(e){
    e.preventDefault();
    this.setState({result: this.state.num1 * this.state.num2});
  }

  setNum1(e) {
    e.preventDefault();
    let num = document.getElementById("num1").value;
    if (num === ""){
      this.setState({num1: ""});
    }
    else{
      this.setState({num1: parseInt(num)});
    }

  }

  setNum2(e){
    e.preventDefault();
    let num = document.getElementById("num2").value;
    if (num === ""){
      this.setState({num2: ""});
    }
    else{
      this.setState({num2: parseInt(num)});
    }
  }

  clear(e){
    e.preventDefault();
    this.setState({result: 0, num1: "", num2: ""});
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input id="num1" onChange={this.setNum1} type = "text" value={num1}></input>
        <input id="num2" onChange={this.setNum2} type = "text" value={num2}></input>
        <button onClick={this.clear}>clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.div}>/</button>
    </div>
    );
  }
}

export default Calculator;
