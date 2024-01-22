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
}

const maxLength10 = maxLengthCreator(50)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
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
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type Logintype = MapStatePropsType & MapDispatchToProps

const Login = (props: Logintype) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchToProps = {
    login: (login: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: StoreType): MapStatePropsType => ({
    isAuth: state.auth.data.isAuth
})

export default connect(mapStateToProps, {login})(Login)

