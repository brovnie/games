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
        e.preventDefault();
        const value = e.target.value;
        if( (value > 0 && value < 10) || value === "") {
            const newSudokuArray = [...sudokuNumbers];
            newSudokuArray[id] = value;
            setSudokuNumbers(newSudokuArray);
        }
    }


    /*
        const showSolutionHandler = (e) => {
        e.preventDefault();
        const sudokuString = sudokuNumbers.map(sudokuNumber => {
            if(sudokuNumber === "") {
                return '.';
            }
            return sudokuNumber;
        }).join("");
       // const sudokuSolution = getSudokuSolutuion(sudokuString);
       // return sudokuSolution;
               try {
       fetch("http://0.0.0.0:9090/http://127.0.0.1:5000", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            body: JSON.stringify({
                sudoku: ["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]
            })
       })} catch (error) {
            console.log(error.message);
        }
    }        
    
    */

    const showSolutionHandler = (e) => {
        const sudokuString = sudokuNumbers.map(sudokuNumber => {
            if(sudokuNumber === "") {
                return '.';
            }
            return sudokuNumber;
        }).join("");
        const sudokuSolution = getSudokuSolutuion(sudokuString);
        console.log(sudokuSolution);
        return sudokuSolution;
    }

    const getSudokuSolutuion = async (sudokuString) => {
        try {
            const response = await fetch("http://localhost:9090/http://127.0.0.1:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sudoku: ["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]
                })
            });
            
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const data = await response.json();
            const solution =  data.data[0].solution;
            return solution;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className={style.sudoku}>
                { SudokuStarterArray.map((value, index) => (
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
            <Button buttonSpec={{ onClick: showSolutionHandler }}> Show solution </Button>
        </div>
    )
}

export default Sudoku;