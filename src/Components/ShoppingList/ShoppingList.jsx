import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ShoppingList = function() {

    const [shopList, setShopList] = useState([
        {name: 'name1', cost: 100, amount: 1, sum: 100},
        {name: 'name2', cost: 200, amount: 1, sum: 200},
        {name: 'name3', cost: 300, amount: 1, sum: 300},
    ])

    const [totalSum, setTotalSum] = useState(0);

    function whatSum() {
        let sum = 0;
        shopList.map((item) => {
            sum += item.sum;
        })
        setTotalSum(sum);
    }


    function increment(name) {
        let i = 0;
        let copyList = shopList.slice();
        while (copyList[i].name !== name)
            i++;
        copyList[i].amount++;
        copyList[i].sum = shopList[i].sum + shopList[i].cost;
        setShopList(copyList);    
        setTotalSum(totalSum + shopList[i].cost);
    }

    function decrement(name) {
        let i = 0;
        let copyList = shopList.slice();
        while (copyList[i].name !== name)
            i++;
        if (copyList[i].amount) {
            copyList[i].amount--;
            copyList[i].sum = shopList[i].sum - shopList[i].cost;
            setTotalSum(totalSum - shopList[i].cost);
        }    
        setShopList(copyList);    
    }

    useEffect(() => {
        whatSum();
    },[])

    return (
        <table>
            <tbody>
                {shopList.map((prod) => {
                    return <Product
                        product={prod}
                        inc={increment}
                        dec={decrement}
                        key={prod.name}/>
                })
                }

            {shopList.length ? 
                (<tr className="str-product low-height">
                    <td className="cell-empty"></td>
                    <td className="cell-totalsum">Итого</td>
                    <td className="cell-totalsum">{totalSum} ₽</td>
                </tr>)
                : <div></div>
                // useMemo
            }
            
            </tbody>
        </table> 
)}

export default ShoppingList;