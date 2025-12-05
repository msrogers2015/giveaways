import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Giveaway from './pages/Giveaway'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/giveaway/:id" element={<Giveaway />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;