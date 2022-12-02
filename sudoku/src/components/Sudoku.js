import Input from "./UI/Input";
import Button from "./UI/Button";
import style from "./Sudoku.module.css";
import { useState} from 'react';

const DUMMYSUDOKU = "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254";

const Sudoku = () => {
    const SudokuStarterArray = DUMMYSUDOKU.split("").map( number => {
        if(number === ".") return "";
        return number;
    });
    const [sudokuNumbers, setSudokuNumbers] = useState(SudokuStarterArray);

    const updateSudokuNumbersHandler = id => e => {
        const value = e.target.value;
        if(value > 0 && value< 10) {
            const newSudokuArray = [...sudokuNumbers];
            newSudokuArray[id] = value;
            setSudokuNumbers(newSudokuArray);
        }
    }

    const showSolutionHandler = () => {
        const sudokuArray = sudokuNumbers.map(sudokuNumber => {
            if(sudokuNumber === "") {
                return '.';
            }
            return sudokuNumber;
        })
        const sudokuString = sudokuArray.join("");
        console.log(sudokuString);
        // send request to api
        // display answer
    }

    return (
        <form onSubmit={showSolutionHandler}>
            <div className={style.sudoku}>
                {
                    SudokuStarterArray.map((value, index) => (
                         <Input 
                            key={index}
                            input= {{
                                id : "sudoku_field__" + {index},
                                type: "number",
                                min: '1',
                                max: '9',
                                value: sudokuNumbers[index],
                                onChange: updateSudokuNumbersHandler(index)
                            }}
                        />
                    ))
                }
            </div>
            <Button> Show solution </Button>
        </form>
    )
}

export default Sudoku;