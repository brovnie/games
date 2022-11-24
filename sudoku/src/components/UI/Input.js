import style from './Input.module.css';
const Input = (props) => {
    return (
        <div className={style.wrapper}>
            <input type="number" defaultValue={props.sudokuNumber || "0"} />
        </div>
    )    
}

export default Input;