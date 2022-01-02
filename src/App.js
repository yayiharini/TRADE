import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './Components/Main'
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <HomePage />
      </div>
    </BrowserRouter>


  );
}

export default App;
