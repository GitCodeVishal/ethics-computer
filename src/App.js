import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import Venues from "./Components/Venues";
import VenueDetails from './Components/VenueDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/venue/:venueId" element={<VenueDetails />} />
          <Route index element={<Venues />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
