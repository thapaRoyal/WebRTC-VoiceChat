// Imports
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';

// App Component
function App() {
  return (
    // Routing and Navigation
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export
export default App;
