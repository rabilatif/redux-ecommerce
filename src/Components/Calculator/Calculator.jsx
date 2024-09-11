import React, {useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { addition, subtraction, multiply, divide } from "../../Redux/CalculatorSlice/CalculatorSlice";

export const Calculator = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.calculator.value);

  const [value,setValue]= useState('');
  const [value2,setValue2]= useState('');

  const userValue = (e) => {
    setValue(e.target.value)
  }
  const userValue2 = (e) => {
    setValue2(e.target.value)
  }

  return (
    <>
      <input onChange={(e)=> userValue(e)} type="number" /> <br></br>
      <input onChange={(e)=> userValue2(e)} type="number" /> <br></br>
      <button onClick={() => dispatch(addition({ value1: value, value2: value2 }))}>+</button>
      <button onClick={() => dispatch(subtraction({ value1: value, value2: value2 }))}>-</button>
      <button onClick={() => dispatch(multiply({ value1: value, value2: value2 }))}>*</button>
      <button onClick={() => dispatch(divide({ value1: value, value2: value2 }))}>/</button>
      <h1>Total: {count}</h1>
    </>
  );
};
