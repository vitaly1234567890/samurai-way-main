import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileUser} from "../../../redux/profile-reducer";
import classes from './ProfileInfo.module.css'
import styles from "../../common/FormsControls/FormControls.module.css"


type PropsProfileDataForm = {
    onSubmit: any
    profile: ProfileUser
}

const ProfileDataForm: React.FC<PropsProfileDataForm & InjectedFormProps<{}, PropsProfileDataForm>> =
    ({
         handleSubmit, profile, error
     }) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <button>Save</button>
                </div>

                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}

                <div>
                    <b>Full name</b>: {createField({
                    component: Input, name: 'fullName', placeholder: 'Full name', validate: []
                })}
                </div>
                <div>
                    <b>Looking for a job</b>:
                    {createField({
                        component: Input,
                        name: 'lookingForAJob',
                        placeholder: '',
                        validate: [],
                        type: "checkbox"
                    })}
                </div>
                <div>
                    <b>My professional skills</b>:
                    {createField({
                        component: Textarea,
                        name: 'lookingForAJobDescription',
                        placeholder: 'My professional skills',
                        validate: []
                    })}
                </div>
                <div>
                    <b>About me</b>:
                    {createField({
                        component: Textarea,
                        name: 'aboutMe',
                        placeholder: 'About me',
                        validate: []
                    })}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(k => {
                    return <div key={k} className={classes.contact}>
                        <b>{k}: {createField({
                            component: Input, name: 'contacts.' + k, placeholder: k, validate: []
                        })}</b>
                    </div>
                })}
                </div>
            </form>
        )
    }

const ProfileDataFormReduxForm = reduxForm<{}, PropsProfileDataForm>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm