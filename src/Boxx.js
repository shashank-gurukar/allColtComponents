import React, { Component } from 'react'

class Boxx extends Component{

    
    render(){
        const boxStyle = {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: `${this.props.color}`
           
        };
        return(
            <div>
            <div style={boxStyle}></div>
            <button onClick={this.props.removeBox}>
                    X
                </button>
            </div>
        )
    }
}
export default Boxx;