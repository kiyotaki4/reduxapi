import React from 'react'

function About() {
  return (
    <div className="aboutPage">
        <img src="https://i.pinimg.com/736x/65/11/06/651106067c56980f19584a3903e97fad.jpg" alt="" />
        <div className="textContainer">
        <h1 style={{color:"blue"}}>About</h1>
        <p>tg: <span style={{color:"blue"}}>@kiyotaki4</span></p>
        <p>github: <span style={{color:"blue"}}>@kiyotaki4</span></p>
        <p> Привет! Я Frontend-разработчик на React. Разрабатываю современные веб-приложения, 
        используя React, Redux, асинхронные операции и API.</p>
        <p> В своём резюме-проекте я продемонстрировал работу с Redux Toolkit, асинхронными запросами 
        (async/await) и управлением состоянием.</p>
        </div>
    </div>
  )
}

export default About