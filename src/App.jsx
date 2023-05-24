import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { increaseCounter } from './store/counterReducer'
import { useState } from 'react'


function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const increase = () => {
    // dispatch(increaseCounter())
    dispatch({type: 'ADD_TODO', payload: "Учится"})
  }

  const decrease = () => {
    if (counter > 0) dispatch({type: "DECREASE"})
  }

  return (
    <>
      <input type="text"  />
      <button onClick={decrease} >-</button>
        {counter}
      <button onClick={increase}>+</button>
    </>
  )
}

export default App
