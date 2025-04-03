import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/Counter.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <nav>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">Контакты</a></li>
          </ul>
        </nav>
    <Router>
    <Routes>
          <Route path="/" element={<Provider store={store}>
      <Counter />
      <App />
  </Provider>} />
          <Route path="/about" element={<About />} />
        </Routes>
    
  </Router>
  </StrictMode>,
)
