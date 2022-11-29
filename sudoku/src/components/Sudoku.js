import Input from "./UI/Input";
import Button from "./UI/Button";
import style from "./Sudoku.module.css";
import {useEffect, useState, useRef} from 'react';

const DUMMYSUDOKU = "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254";

const Sudoku = () => {
    const numberOfInputs = 81;
    const [sudokuFields, setsudokuFields] = useState([]);
    const sudokuNumberInput = useRef([]);
    sudokuNumberInput.current = [];

    const addToRef = (sudokuNumber) => {
        if(sudokuNumber) sudokuNumberInput.current.push(sudokuNumber.value);
    }

    useEffect(() => {
        let arrayOfInputs = [];
        for(let i =0; i < numberOfInputs; i++){
            let sudokuValue = DUMMYSUDOKU.charAt(i) === "." ? "" : DUMMYSUDOKU.charAt(i);
            arrayOfInputs.push(
                <Input 
                    key={i}
                    ref={addToRef} 
                    input= {{
                        id : "sudoku_field__" + {i},
                        type: "number",
                        min: '1',
                        max: '9',
                        defaultValue: sudokuValue,
                    }
                    }
                    
                />
            );
        }
        setsudokuFields(arrayOfInputs);
    }, [])


    const showSolutionHandler = (e) => {
        e.preventDefault();
        const sudokuArray = sudokuNumberInput.current.map(sudokuNumber => {
            if(sudokuNumber === "") {
                return '.';
            }
            return sudokuNumber;
        })
        const sudokuString = sudokuArray.join("");
        console.log(sudokuString);
        //TODO: get values from all inputs

        //TODO: if there is no value set value to .
        // send request to api
        // display answer

    }

    return (
        <form onSubmit={showSolutionHandler}>
            <div className={style.sudoku}>
                {sudokuFields}
            </div>
            <Button> Show solution </Button>
        </form>
    )
}

export default Sudoku;