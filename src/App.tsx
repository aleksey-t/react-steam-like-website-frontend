import React from 'react';
import { Counter } from './features/counter/Counter';
import { DatePicker } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react-steam-like-website-frontend</h1>
        <Counter />
      </header>
        <DatePicker />
    </div>
  );
}

export default App;
