import React, { useEffect } from 'react';
import Search from '../Search/Search';



const DisplayProducts = (props) => {

    // useEffect(()=>{
    //     searchResults();
    // })

   async function searchResults(results){
       props.searchProducts(results);

   } 

    return (
        <React.Fragment>

            <button onClick = {() =>this.props.logoutUser()}>Logout</button>
            <Search product = {props.productList} searchResults={searchResults}/>
            <table>
                <thead>
                    <tr>
                        <th>Album Name</th>
                        <th>Artist</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productList.map((product) => {
                        return (
                            <tr key={product.productId}>
                                <td>{product.productName}</td>
                                <td>{product.artist}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.genre}</td>
                                <td>{product.rating}</td>
                                {/* <td><button onClick={ () => props.addToCart(product)}>Add To Cart</button></td> */}
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default DisplayProducts;