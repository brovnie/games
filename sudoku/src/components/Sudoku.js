import Input from "./UI/Input";
import style from "./Sudoku.module.css";

const Sudoku = () => {
    const renderInputs = (number) => {
        let arrayOfInputs = [];
        for(let i =0; i < number; i++){
            arrayOfInputs.push(<Input sudokuNumber={i} key={i}/>);
        }
        console.log("return");
        return arrayOfInputs;
    }

    return (
        <div className={style.sudoku}>
            {renderInputs(81)}
        </div>
    )
}

export default Sudoku;