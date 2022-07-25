import React from 'react';
import CardCgt from './CardCgt/CardCtg';


const Grid = function({ctg, list}) {

    // const categories = [
    //     {id: 1, title: 'Js 1'},
    //     {id: 2, title: 'Js 2'}, 
    // ]
    // const cgtList = list;
    // console.log('grid base: ', list)
    return (
        <section className="grid">
            {list.map((category) => 
                <CardCgt id={category.id} title={category.name} key={category.id} ctg={ctg}/>
            )}
            
        </section>
)}

export default Grid;