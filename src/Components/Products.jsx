import React, {useEffect, useState} from 'react';
import CardEmpty from './CardEmpty/CardEmpty';
import CardMore from './CardMore/CardMore';
import CardProd from './CardProd/CardProd';
import SectionTitle from './UI/title/SectionTitle';

const Products = function({productss}) {

    // console.log('prodList: ',list)
    // const [products, setProducts] = useState([
    //     {id: 11, title: 'prod 1'},
    //     {id: 12, title: 'prod 2'},
    //     {id: 13, title: 'prod 3'},
    //     {id: 21, title: 'prod 4'},
    //     {id: 22, title: 'prod 5'},
    //     {id: 23, title: 'prod 6'},
    //     {id: 31, title: 'prod 7'},
    //     {id: 32, title: 'prod 8'},
    //     {empty:'', id: Date.now()+1}
    // ])

    useEffect(()=> {
        setProducts(productss)
    }, [productss])

    const [products, setProducts] = useState();
    // setProducts(list)
    // console.log(products)


    function showMore(id) {
        let col = id % 10;
        let copyProducts = products.slice();
        let i = 0;
        while (copyProducts[i].id !== id)
            i++;
        let under = i + 3;   
        let isEmpty;
        if (copyProducts[under]){
           isEmpty = (copyProducts[under].hasOwnProperty('empty')) && (under+1 !== copyProducts.length);
        } else 
            isEmpty = false;

        if (isEmpty) {
            copyProducts.splice(under,1,{id: Date.now(), content:'lorem'})
        } else {
            let newRow = [{empty:'', id: Date.now()+1}, {empty:'', id: Date.now()+2}, {empty:'', id: Date.now()+3}];
            newRow.splice(col-1, 1, {id: Date.now()+40, content:'lorem'})
            copyProducts.splice(i+4-col,0,...newRow);
        }
        setProducts(copyProducts);
    }  

    function hideMore(id) {
        let i = 0;
        let copyProducts = products.slice();
        while (copyProducts[i].id !== id)
            i++;
        let under = i + 3;
        let hasMoreRow = copyProducts[under-1].hasOwnProperty('content') || copyProducts[under+1].hasOwnProperty('content')
            || copyProducts[under+2].hasOwnProperty('content') || copyProducts[under-2].hasOwnProperty('content');
        if (hasMoreRow) {
            copyProducts.splice(under,1, {empty:'', id: Date.now()+1});
        } else {
            let col = id % 10;
            copyProducts.splice(under-col+1,3);
        }
        setProducts(copyProducts);
    }

    return (
        
        <section className="products" id='products'>
            <SectionTitle title='Товары' subtitle={{firstRow: 'Выберите товары'}}/>
            <div className='products_grid_container'>
            {console.log('in products')}
            {products && products.map((product) => {
                if (product.hasOwnProperty('name')) {
                    return <CardProd 
                        title={product.name} 
                        key={product.id} 
                        id={product.id} 
                        show={showMore}
                        hide={hideMore}/>
                } else if (product.hasOwnProperty('content')){
                    return <CardMore key={product.id}/>
                } else if (product.hasOwnProperty('empty')){
                    return <CardEmpty key={product.id}/>
                }
            }    
            )}
            </div>    
        </section>
)}

export default Products;