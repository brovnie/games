import style from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={style.wrapper}>
            <input ref={ref} {...props.input}/>
        </div>
    )    
});

export default Input;