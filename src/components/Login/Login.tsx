import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";
import style from "./../common/FormsControls/FormControls.module.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}


const maxLength10 = maxLengthCreator(50)

export const LoginForm: React.FC<InjectedFormProps<FormDataType> & {captchaUrl:string} > =
    ({ handleSubmit, error,captchaUrl}) => {

        return (
            <form onSubmit={handleSubmit}>
                {createField({
                    component: Input, name: 'login', placeholder: 'Login', validate: [required, maxLength10]
                })}
                {createField({
                    component: Input, name: 'password', placeholder: 'Password', validate: [required, maxLength10],
                    type: 'password',
                })}
                {createField({component: Input, name: 'rememberMe', type: 'checkbox', label: 'Remember me'})}


                {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
                {captchaUrl &&
                    createField({
                        component: Input, name: 'captcha', placeholder: 'Symbols from image', validate: [required]
                    })}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    };

const LoginReduxForm = reduxForm<FormDataType,any>({
    form: 'login'
})(LoginForm);

type Logintype = MapStatePropsType & MapDispatchToProps

const Login = (props: Logintype) => {
    const onSubmit = (formData: FormDataType) => {

        props.login(formData.login, formData.password, formData.rememberMe, formData?.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string
}

type MapDispatchToProps = {
    login: (login: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}

const mapStateToProps = (state: StoreType): MapStatePropsType => ({
    captchaUrl: state.auth.url,
    isAuth: state.auth.data.isAuth
})

export default connect(mapStateToProps, {login})(Login)

