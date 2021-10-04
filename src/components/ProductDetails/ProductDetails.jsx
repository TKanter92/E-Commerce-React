import React, { useEffect } from 'react';


function ProductDetails (props) {

    useEffect ( async () => {
        await props.getProductDetails();
    }, []);

    const singleItem = props.products.map(item => {
        if(item.is_available ===true){
            return <tr key={item.id}>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.genre}</td>
        </tr>
    }
        else{
            return console.log('Not retrieving the product item')
        }
    })

    return(
        <div>
          {singleItem}
        </div>
    )
}

export default ProductDetails