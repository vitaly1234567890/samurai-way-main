import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            Main Content
            <div>
                <img  className={classes.mainPhoto} src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg" alt="mainPhoto"/>
            </div>
            <div>
                <img className={classes.Avatar}  src="https://zamanilka.ru/wp-content/uploads/2022/05/robo-240322-1-edited.jpg" alt="Photo Avatar"/>
            </div>
            <MyPosts/>
        </div>
    );
};

