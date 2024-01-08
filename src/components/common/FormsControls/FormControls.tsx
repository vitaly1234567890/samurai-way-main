import React from "react";
import styles from "./FormControls.module.css"
import {FieldMetaProps} from "formik";

type TextareaProps = {
    input: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta: FieldMetaProps<any>;
};
export const Textarea: React.FC<TextareaProps> = ( {  input,meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

type InputProps = {
    input: React.InputHTMLAttributes<HTMLInputElement>;
    meta: FieldMetaProps<any>;
};

export const Input: React.FC<InputProps> = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            <div>
                <input {...props} {...input} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};