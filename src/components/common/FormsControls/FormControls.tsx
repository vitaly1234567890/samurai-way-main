import React from "react";
import styles from "./FormControls.module.css"
import {FieldMetaProps} from "formik";
import {Field} from "redux-form";

type TextareaProps = {
    input: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta: {
        touched: boolean,
        error: string
    }
};
export const Textarea: React.FC<TextareaProps> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

type InputProps = {
    input: React.InputHTMLAttributes<HTMLInputElement>;
    meta: FieldMetaProps<any>;
};

export const Input: React.FC<InputProps> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            <div>
                <input {...props} {...input} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};


type CreateFieldProps = {
    label?: string;
    component: React.ComponentType<any>;
    name: string;
    validate?: any[];
    placeholder?: string;
    [key: string]: React.ComponentType<any> | string | any[] | undefined;
};

export const createField: React.FC<CreateFieldProps> = ({ label, ...props }) => (
    <div>
        <Field {...props} />
        {label && <span>{label}</span>}
    </div>
);