import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileUser} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/image.png";
import ProfileDataForm from "./ProfileDataForm";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type ProfileInfoType = {
    profile: ProfileUser
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: any
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                           profile,
                                                           status,
                                                           updateStatus,
                                                           isOwner,
                                                           savePhoto,
                                                           saveProfile
                                                       }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileUser) => {
        saveProfile(formData).then(()=> {
            setEditMode(false)
        })

    }

    return <div>
        <div>
            <img className={classes.mainPhoto}
                 src="https://eoimages.gsfc.nasa.gov/images/imagerecords/151000/151746/musselfarms_oli2_2023198_lrg.jpg"
                 alt="mainPhoto"/>
        </div>
        <div className={classes.descriptionBlock}>
            <img className={classes.Avatar} src={profile.photos.small || userPhoto} alt="Photo Avatar"/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
};

type PropsProfileData = {
    profile: ProfileUser
    isOwner: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileData = ({profile, isOwner, setEditMode}: PropsProfileData) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={() => setEditMode(true)}>Edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(k => {
                return <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]}/>
            })}
            </div>
        </div>
    )
}

type Props = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: Props) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

