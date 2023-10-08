import React, { Component } from 'react'
import Box from './box';
import './BoxContainer.css'
class BoxContainer extends Component{
    static defaultProps={num:18}
    render(){
        const boxes = Array.from({length:this.props.num}).map(()=>(
            <Box/>
        ));
        return(
            <div className='BoxContainer'>{boxes}</div>
        )
    }
}

export default BoxContainer;