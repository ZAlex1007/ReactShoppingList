import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            item: '',
            quantity: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { item, quantity } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Item</label>
                <input 
                    type="text" 
                    name="item" 
                    value={item} 
                    onChange={this.handleChange} />
                <label>Quantity</label>
                <input 
                    type="text" 
                    name="quantity" 
                    value={quantity} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;