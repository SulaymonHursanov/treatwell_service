import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ()=> {
    return (
        <header className={classes.header}>
            <div className={classes.innerContent}>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/jira-1-458321.png" alt=""/>
                </div>
                <div className={classes.menu}>
                    <div>
                        <NavLink to={"/hair"} >Hair</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/hair-removal'}> Hair removal</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/massage'}> Massage</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/nails'}> Nails</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/face'}>Face</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/body'}>Body</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/spa-days'}> Spa days & Breaks</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/new-salon-discount'}>New salon discount</NavLink>

                    </div>
                    <div>
                        <NavLink to={'/the-treatment-files'}> The treatment files</NavLink>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;