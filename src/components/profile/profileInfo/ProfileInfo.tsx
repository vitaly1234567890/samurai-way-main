import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileUser} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfileUser
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img  className={classes.mainPhoto} src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg" alt="mainPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.Avatar}  src={props.profile.photos.large} alt="Photo Avatar"/>
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <ProfileStatus status={'Hello'} />
        </div>
    );
};

