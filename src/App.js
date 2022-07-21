import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchpage from './pages/searchpage';
import Resultpage from './pages/resultspage';

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Searchpage />} />
          <Route
            path="/result"
            element={<Resultpage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
