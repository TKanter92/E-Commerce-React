import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const DisplayProducts = (props) => {
  // useEffect(()=>{
  //     searchResults();
  // })

  async function searchResults(results) {
    props.searchProducts(results);
  }

  return (
    <React.Fragment>
      <Search product={props.productList} searchResults={searchResults} />
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Album Name</th>
            <th>Artist</th>
            <th>Price</th>
            <th>Description</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {props.productList.map((product) => {
            console.log(product);
            return (
              <tr key={product.productId}>
                <td>{product.productName}</td>
                <td>{product.artist}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.genre}</td>
                <td>{product.rating}</td>
                <td>
                  <Link to={`/details/${product.productId}`}>
                    Product Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Link as={Link} to="/addnew">
          Add Album
        </Link>
      </table>
    </React.Fragment>
  );
};

export default DisplayProducts;
