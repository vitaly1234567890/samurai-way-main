import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileUser} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/image.png";

type ProfileInfoType = {
    profile: ProfileUser
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length){
            savePhoto(e.target.files[0])
        }
   }


    return (
        <div>
            <div>
                <img  className={classes.mainPhoto} src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg" alt="mainPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.Avatar}  src={profile.photos.small || userPhoto} alt="Photo Avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                {profile.fullName}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
};

