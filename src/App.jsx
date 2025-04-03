import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [apiArray,setApiArray]=useState([])
  // https://jsonplaceholder.typicode.com/todos
  useEffect(()=>{
    async function GetApi(){
      try{
      // fetch("https://jsonplaceholder.typicode.com/todos") = await res;
const res = await fetch("https://jsonplaceholder.typicode.com/todos");
const data = await res.json();
console.log(data)
setApiArray(data)
      }catch(error){
        console.error("error")
      }
    }
    GetApi()
  },[])
  return (
    <>
      <div className="async">
        <span >Работа с API и Асинхронными операциями</span>
        <p style={{textAlign:"left",marginTop:"50px"}}>{apiArray.map(e=>(<div>
          {e.id} {e.title}
        </div>))}</p>
      </div>
    </>
  )
}

export default App
