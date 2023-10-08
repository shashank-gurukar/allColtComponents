import React, { Component } from 'react';
import './Box.css';
import { choice } from './helper';

class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'black', 'pink', 'magenta'],
  };

  state = {
    color: choice(this.props.allColors),
  };

  pickColor=()=>{
    let newColor;
    do{  newColor=choice(this.props.allColors)}while(this.state.color===newColor)
    this.setState({color:newColor})
  }
  handleClick = () => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
