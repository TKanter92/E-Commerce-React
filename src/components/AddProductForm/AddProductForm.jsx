import React, { Component } from 'react';

class AddProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            artist: "",
            price: null,
            description: "",
            genre: "",
            rating: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewProduct(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="productName">Product Name</label>
                    <input onChange={this.handleChange} type="text" name="productName" />
                </div>
                <div>
                    <label for="artist">Artist</label>
                    <input onChange={this.handleChange} type="text" name="artist" />
                </div>
                <div>
                    <label for="price">Price</label>
                    <input onChange={this.handleChange} type="text" name="price" />
                </div>
                <div>
                    <label for="description">Description</label>
                    <input onChange={this.handleChange} type="text" name="description" />
                </div>
                <div>
                    <label for="genre">Genre</label>
                    <input onChange={this.handleChange} type="text" name="genre" />
                </div>
                <div>
                    <label for="rating">Rating</label>
                    <input onChange={this.handleChange} type="text" name="rating" />
                </div>
                <button type="submit">Add Product</button>
            </form>
        );
    }
}

export default AddProductForm;