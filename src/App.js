import React from 'react';
import Router from './Routes'
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app container">
      <header>
        <Link to='/' className='list-link'>
          <h1>Trading Buddy</h1>
        </Link>
      </header>
      <Router/>
    </div>
  );
}

export default App;
