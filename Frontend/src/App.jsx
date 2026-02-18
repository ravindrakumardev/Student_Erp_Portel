import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './Pages/Register';
import Navbar from './components/Navebar';



function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <Navbar />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/register" element={<Register />} />
     
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
