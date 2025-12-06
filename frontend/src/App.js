import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Giveaway from './pages/Giveaway'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageLayout from "./Layout";
import TermsOfService from "./pages/TOS";
import GiveawayList from "./pages/GiveawayList";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/giveaways" element={<GiveawayList />} />
          <Route path="/giveaway/:id" element={<Giveaway />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;