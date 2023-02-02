import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AdminPage from './pages/AdminPage/AdminPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
