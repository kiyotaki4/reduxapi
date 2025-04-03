import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset,double,randomAdd } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="counter-css">
      <span>Работа с использованием <span style={{color:"rgb(37, 221, 249)"}}>Redux Toolkit</span></span>
        <h1>{count}</h1>

      <div className="btn-div">
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(increment())}
        >
          Увеличить
        </button>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(decrement())}
        >
          Уменьшить
        </button>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(reset())}
        >
          Сбросить
        </button>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(double())}
        >
          Удвоить
        </button>
        
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(randomAdd())}
        >
          Добавить рандомное число
        </button>
      </div>
    </div>
  )
}