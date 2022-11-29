import style from './Input.module.css';
const Input = (props) => {
    return (
        <div className={style.wrapper}>
            <input type="number" defaultValue={props.sudokuNumber || ""} />
        </div>
    )    
}

export default Input;