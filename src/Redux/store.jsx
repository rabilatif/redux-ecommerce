import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../src/Redux/CounterSlice/CounterSlice'
import calculatorReducer from '../../src/Redux/CalculatorSlice/CalculatorSlice'
import  userReducer  from '../../src/Redux/UserSlice/UserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
    user: userReducer,
  },
})