import React from 'react';
import classes from '../Services.module.css'


const ServiceItem = (props)=> {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.image}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCZEoFkQ9JDojk_rVNEO9JkHyTgl2stlHRPQkUtjTNV4TwNWJ" alt=""/>
                </div>
                <div className={classes.info}>
                    {props.info}
                </div>
            </div>
            <div className={classes.services}>
                <div>
                    {props.serviceName}
                </div>
                <div>
                    service name
                </div>
            </div>
            <div className={classes.details}>
                <button className={classes.accordion}>Section 1</button>
                <div className={classes.panel}>
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;