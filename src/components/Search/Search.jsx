import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            results: [],
         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.searchAlbums();
         this.props.searchResults(this.state.results);
     }

     async searchAlbums(){
        //  try{
            console.log("Search " + this.state.search);
             const results = this.props.product.filter(product =>
                product.productName.toLowerCase().includes(this.state.search.toLowerCase()) ||
                product.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
                 product.genre.toLowerCase().includes(this.state.search.toLowerCase())
                );
            if(results != ''){
                console.log(results);
                this.state.results = results;
            }else{
                alert("No Results");
            }

        //  }catch{
        //     console.log("unable to search");
        //  }
     }


    render() { 
        return ( 
            <React.Fragment>
                <form className="" onSubmit = {this.handleSubmit}>
                    <input name="search" placeholder="Search..." onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Search;