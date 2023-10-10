import React, { Component } from 'react';
import Boxx from './Boxx';
import BoxForm from './BoxFrom'; // Corrected import

class BoxList extends Component {
    state = {
        boxes: [{ width: 20, height: 20, color: 'orange' }]
    };

    create = (newBox) => {
        this.setState({ boxes: [...this.state.boxes, newBox] });
    }
    removeBox = (index) => {
        const updatedBoxes = [...this.state.boxes];
        updatedBoxes.splice(index, 1);
        this.setState({ boxes: updatedBoxes });
    }
   
    render() {
        const boxes = this.state.boxes.map((box, index) => (
            <Boxx key={index} height={box.height} width={box.width} color={box.color}  removeBox={() => this.removeBox(index)}/>
        ));

        return (
            <div>
                <h1>Colour Box</h1>
                <BoxForm createBox={this.create} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;
