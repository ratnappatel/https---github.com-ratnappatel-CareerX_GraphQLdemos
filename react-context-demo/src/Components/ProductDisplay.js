import React, {useContext} from 'react';
import mContext from './MainContext';

const ProductDisplay = props =>{
    const products=useContext(mContext);
    console.log(products)
    const display = prds =>{
     
        return prds.map(product =>{
            return (
                <div>
                    Product Id : <p>{product.id}</p>
                    Product Title : <p>{product.Title}</p>
                    Product Rating : <p>{product.Rating}</p>
                </div>
            ); 
        })
    }
    return (
        <ul>
            {display(products)}
        </ul>
    )
}

export default ProductDisplay;