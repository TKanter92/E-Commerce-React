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
            <div className="d-flex container justify-content-start align-items-center">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className = "row mb-3">
                        <label for="productName">Album Name</label>
                            <div className="col-sm-10">
                                <input placeholder="Album Name..." onChange={this.handleChange} type="text" name="productName" />
                            </div>
                    </div>
                    <div className = "row mb-3">
                        <label for="artist">Artist</label>
                            <div className="col-sm-10">
                                <input placeholder="Artist Name..." onChange={this.handleChange} type="text" name="artist" />
                            </div>
                    </div>
                    <div className = "row mb-3">
                        <label for="price">Price</label>
                            <div className="col-sm-10">
                                <input placeholder="Price..." onChange={this.handleChange} type="text" name="price" />
                            </div>
                    </div>
                    <div className = "row mb-3">
                        <label for="description">Description</label>
                            <div className="col-sm-10">
                                <input placeholder="Description..." onChange={this.handleChange} type="text" name="description" />
                            </div>
                    </div>
                    <div className = "row mb-3">
                        <label for="genre">Genre</label>
                            <div className="col-sm-10">
                                <input placeholder="Genre..." onChange={this.handleChange} type="text" name="genre" />
                            </div>
                    </div>
                    <div className = "row mb-3">
                        <label for="rating">Rating</label>
                            <div className="col-sm-10">
                                <input placeholder="Rating..." onChange={this.handleChange} type="text" name="rating" />
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-auto">
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </div>   
                    </div>
                </form>
            </div> 
        );
    }
}

export default AddProductForm;