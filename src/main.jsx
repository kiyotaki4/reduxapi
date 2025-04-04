import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './app/store';
import App from './App.jsx';
import About from './About.jsx';
import { Counter } from './features/counter/Counter.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">Контакты</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <Counter />
              <App />
            </Provider>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>
);
