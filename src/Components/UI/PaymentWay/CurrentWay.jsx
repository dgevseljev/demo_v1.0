import React, { useState } from 'react';
// import classes from './SectionTitle.module.css'

const CurrentWay = ({width, offset}) => {

    return (
        <div className="payment_current-way" style={{left: `${offset}px`, width: `${width}px`}}></div>
)}

export default CurrentWay;