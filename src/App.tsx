import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import {Landing} from "./Landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
