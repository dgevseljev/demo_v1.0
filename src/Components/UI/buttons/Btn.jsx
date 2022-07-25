import React from 'react';
import classes from './Btn.module.css'
// import {useHistory} from 'react-router-dom'

const Btn = function({children, ...props}) {
    // {console.log(props)}

    // function link() {
    //     let address = 'http://localhost:3000'+href;
    //     browserHistory.push(address);
    // }

    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    )  
}

export default Btn;