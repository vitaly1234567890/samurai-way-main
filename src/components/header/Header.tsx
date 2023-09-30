import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
        </header>
    );
};

