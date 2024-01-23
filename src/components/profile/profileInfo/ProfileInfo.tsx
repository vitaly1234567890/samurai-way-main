import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileUser} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoType = {
    profile: ProfileUser
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img  className={classes.mainPhoto} src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg" alt="mainPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.Avatar}  src={profile.photos.small} alt="Photo Avatar"/>
            </div>
            <div>
                {profile.fullName}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
};

