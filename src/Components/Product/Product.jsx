import React from 'react';
// import classes from './Procuct.module.module.css'


const Product = function({product, inc, dec}) {


    return (
        <tr className="str-product">
            <td className="cell-product">{product.name}</td>
            <td className="cell-product">
                <button className="btn-count" onClick={() => inc(product.name)}>+</button>
                <div className='count'>{product.amount}</div>
                <button className="btn-count" onClick={() => dec(product.name)}>-</button>
            </td>
            <td className="cell-product" id="sum1">{product.sum} ₽</td>
        </tr>
)}

export default Product;