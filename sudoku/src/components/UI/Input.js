import style from './Input.module.css';
import React from 'react';

const Input = (props) => {
    return (
        <div className={style.wrapper}>
            <input {...props.input}/>
        </div>
    )    
};

export default Input;