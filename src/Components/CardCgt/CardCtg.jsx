import React from 'react';
import classes from './CardCgt.module.css'
import { Link } from 'react-scroll';

const CardCgt = function({title, id, ctg}) {

    function goToProducts() {
        // console.log(title);
        ctg(id)
        console.log('cliked on card: ',id,' ',title)
    }

    return (
        <div className={classes.card} onClick={goToProducts}>
            {/* <Link className='ctgLink' smooth={true} to='footer' duration={1000}/> */}
            {/* <a className='ctgLink' href='#products'></a> */}
            <p className={classes.name}>{title}</p>
            <div className={classes.arrow}></div>
        </div>
)}

export default CardCgt;