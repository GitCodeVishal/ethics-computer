import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout"; 
import Venues from "./Components/Venues";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="platinum-theatre" element={<platinum_hitec_city />} />
          <Route index element={<Venues/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
