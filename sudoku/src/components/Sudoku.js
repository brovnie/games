import Input from "./UI/Input";
import Button from "./UI/Button";
import style from "./Sudoku.module.css";

const DUMMYSUDOKU = "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254";

const Sudoku = () => {
    const renderInputs = (number) => {
        let arrayOfInputs = [];
        for(let i =0; i < number; i++){
            arrayOfInputs.push(
                <Input 
                    sudokuNumber={ DUMMYSUDOKU.charAt(i) === "." ? '' : DUMMYSUDOKU.charAt(i) } 
                    key={i} 
                />
            );
        }
        return arrayOfInputs;
    }

    const showSolutionHandler = (e) => {
        e.preventDelault();
    }

    return (
        <form onSubmit={showSolutionHandler}>
        <div className={style.sudoku}>
            {renderInputs(81)}
        </div>
        <Button> Show solution </Button>
        </form>
    )
}

export default Sudoku;