import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Navbar from './components';
import Details from './pages/details'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;