import React from 'react'
import classes from './Category.module.css'

const Category = ()=> {
    return (
        <div className={classes.category}>
            <div className={classes.title}>
                Hollywood waxing in the UK
            </div>
            <div className={classes.subTitle}>
                We've found 2,305 venues
            </div>
        </div>
    );
};

export default Category;