// Imports
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';

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
        <Route path="/authenticate" exact element={<Authenticate />} />
      </Routes>
      {/* <Routes>
        <Route path="/register" exact element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  );
}

// Export
export default App;
