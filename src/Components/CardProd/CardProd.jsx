import React, { useState } from 'react';
import classes from './CardProd.module.css'

const CardProd = function({title, show, hide, id}) {
    const [classArrow, setClassArrow] = useState(`${classes.arrowProd} ${classes.down}`);

    // function onCl() {
    //     console.log('in cardProd');
    // }

    function showMore(event) {
        event.stopPropagation();
        if (classArrow === `${classes.arrowProd} ${classes.down}`){
            setClassArrow(`${classes.arrowProd} ${classes.down} ${classes.up}`);
            show(id);
        }
        else {
            setClassArrow(`${classes.arrowProd} ${classes.down}`);
            hide(id);
        }  
    }

    return (
        <div className={classes.cardProd}>
            <p className={classes.cardProdName}>{title}</p>
            <div className={`${classes.cardProdBtn} ${classes.toMore}`} onClick={showMore}>
                <div className={classArrow}></div>
                <p className={classes.arrowCaption}>Подробнее</p>
            </div>
            <div className={`${classes.cardProdBtn} ${classes.toCart}`}>
                <p className={classes.arrowCaption}>Добавить в корзину</p>
                <div className={classes.arrowProd}></div>
            </div>
        </div>
)}

export default CardProd;