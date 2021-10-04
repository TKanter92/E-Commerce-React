import React, { Component } from 'react';

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
                 //product.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
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
                <form onSubmit = {this.handleSubmit}>
                    <label>Search:</label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Search;