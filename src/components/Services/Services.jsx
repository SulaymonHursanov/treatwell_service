import React from 'react';
import ServiceItem from './ServiceItem/ServiceItem'
import classes from './Services.module.css'

const Services = (props) => {

    let services = props.serviceData.map((s) => {
       return <ServiceItem info={s.info} serviceName={s.serviceName}/>
    });

    return (
        <div className={classes.content}>
            {services}
        </div>
    );
};

export default Services;