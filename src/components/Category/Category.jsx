import React from 'react'
import classes from './Category.module.css'

const Category = (props)=> {
    return (
        <div className={classes.category}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.subTitle}>
                We've found {props.count} venues
            </div>
        </div>
    );
};

export default Category;