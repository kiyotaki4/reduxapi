import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
      // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
      // которая следит за изменениями в "черновом state" и создает новое 
      // неизменное состояние на основе этих изменений
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
   reset: (state) => {
        state.value = 0; 
      },
    double: (state) =>{
        state.value *=2;
    },
    randomAdd: (state) =>{
        state.value +=Math.floor(Math.random()*1000);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { increment, decrement,reset,double, incrementByAmount,randomAdd } = counterSlice.actions

export default counterSlice.reducer