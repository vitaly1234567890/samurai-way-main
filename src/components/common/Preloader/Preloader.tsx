import React from 'react';
import preloader from "../../../assets/images/preload.png";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{height: '100px', width: '100px'}}/>
        </div>
    );
};
