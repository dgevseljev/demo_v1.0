import React from 'react';
import classes from './SectionTitle.module.css'

const SectionTitle = function({title, subtitle, style}) {
    return (
        <div style={style} className={classes.title}>
            <div className={classes.title_flexcontainer}>
                <div className={classes.title_place}>
                    <h2 className={classes.title_name}>{title}</h2>
                </div>
                <div className={classes.subtitle_container}>
                <h2 className={classes.title_caption}>{subtitle.firstRow}</h2>
                {subtitle.hasOwnProperty('secondRow')
                    ?  <h2 className={classes.title_caption}>{subtitle.secondRow}</h2>
                    :  <p></p>
                }
                </div>  
            </div>
            <div className={classes.title_line}></div>
        </div>
)}

export default SectionTitle;