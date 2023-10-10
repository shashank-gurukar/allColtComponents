import React, { Component } from 'react';


class BoxForm extends Component {
    state = {
        height: "",
        width: "",
        color: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        
        this.props.createBox(this.state);

        // Clear form inputs after submission
        this.setState({
            height: "",
            width: "",
            color: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='height'>
                        <input
                            type="number" // Change to type="number"
                            value={this.state.height}
                            onChange={this.handleChange}
                            name="height"
                        />
                    </label>
                    <label htmlFor='width'>
                        <input
                            type="number" // Change to type="number"
                            value={this.state.width}
                            onChange={this.handleChange}
                            name="width"
                        />
                    </label>
                    <label htmlFor='color'>
                        <input
                            type="text" // Change to type="number"
                            value={this.state.color}
                            onChange={this.handleChange}
                            name="color"
                        />
                    </label>
                    <button type="submit">Create Box</button>
                </form>
            </div>
        );
    }
}

export default BoxForm;
