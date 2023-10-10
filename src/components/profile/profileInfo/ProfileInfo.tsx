import React from 'react';
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img  className={classes.mainPhoto} src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg" alt="mainPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.Avatar}  src="https://zamanilka.ru/wp-content/uploads/2022/05/robo-240322-1-edited.jpg" alt="Photo Avatar"/>
            </div>
        </div>
    );
};

