import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './comp/Main';
import WordFrequency from './comp/WordFrequency';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analysis" element={<WordFrequency />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;