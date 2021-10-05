import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

function ProductDetails(props) {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(async () => {
    await axios
      .get(`https://localhost:44394/api/product/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!product) {
    return <h4>Loading product...</h4>;
  } else {
    console.log("product", product);
    return (
      <table class="table table-striped table-dark">
        
          <thead>
            <tr>
              <th>Album Name</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.productName}</td>
              <td>{product.artist}</td>
              <td>{product.genre}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          </tbody>
      </table> 
    );
  }
}

export default ProductDetails;
