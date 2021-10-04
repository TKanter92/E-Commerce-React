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
    // product.map((item) => {
    // if (item.is_available === true) {
    return (
      <tr>
        {/* <td>{item.productName}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>{item.genre}</td> */}
        <td>{product.productName}</td>
        <td>{product.artist}</td>
        <td>{product.genre}</td>
        <td>{product.rating}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
      </tr>
    );
    // } else {
    //   return console.log("Not retrieving the product item");
    // }
    // });
  }

  //   return <div>{singleItem}</div>;
}

export default ProductDetails;
