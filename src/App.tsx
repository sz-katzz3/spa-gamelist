import React from "react";
import { Route, Routes, NavLink } from 'react-router-dom'
import HomePage from './HomePage'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}><HomePage /></NavLink>
      </nav>
      <Routes>
        <Route path={"/"}  element={<HomePage />} />
        <Route path={"/game"} element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

