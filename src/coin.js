import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
  render() {
    const { url, side } = this.props.info;

    return (
      <div className="Coin">
        <img src={url} alt={side} />
      </div>
    );
  }
}

export default Coin;
