import React, { useRef, useEffect } from 'react';

const PaymentWay = (props) => {
    
    const ref = useRef(null);

    useEffect(() => {
        whatWidth();
        }, []);
   
    function whatWidth () {
        props.move(ref.current.offsetWidth, ref.current.offsetLeft, props.way);
    }
    

    return (

        <li className={props.current} ref={ref} onClick={whatWidth}>{props.way}</li>      
        
)}

export default PaymentWay;