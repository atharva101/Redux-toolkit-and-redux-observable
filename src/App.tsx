import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { decrementCounter, incrementCounter } from './features/counter/counterSlice'
import { increment, decrement } from './features/counter/counterSlice';
import './App.css'

function App() {
  const count = useAppSelector((state)=> state.counter.value)
  const dispatch = useAppDispatch();

  function handleIncrement(){
    //dispatch(incrementCounter())
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  return (
    <div className="App">
      <button style = {{background: 'black', color: 'white', width: '80px'}} onClick = {()=>handleDecrement()}> - </button>
      <span style = {{fontSize: '20px' , padding: '40px'}}>{count}</span>
      <button style = {{background: 'black', color: 'white', width: '80px'}} onClick = {()=>handleIncrement()}> + </button>
    </div>
  )
}

export default App
