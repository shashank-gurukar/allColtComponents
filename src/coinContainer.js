import React, { Component } from 'react';
import { choice } from './helper';
import Coin from './coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', url: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', url: 'https://www.pcgs.com/UserImages/10188938o.jpg' }
    ]
  };

  state = {
    flips: 0,
    heads: 0,
    tails: 0,
    curr: null
  };

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        curr: newCoin,
        flips: st.flips + 1,
        heads: newCoin.side === 'heads' ? st.heads + 1 : st.heads,
        tails: newCoin.side === 'tails' ? st.tails + 1 : st.tails
      };
    });
  };

  handleClick = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="coinContainer">
        <h2>Let's flip a coin</h2>
        <button onClick={this.handleClick}>Flip me!</button>
        {this.state.curr&&<Coin info={this.state.curr}/>}
        <h6>
          Out of {this.state.flips} flips, there are {this.state.heads} heads, and {this.state.tails} tails
        </h6>
      </div>
    );
  }
}

export default CoinContainer;
