import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/home/home.jsx';
import Projects from './pages/home/home.jsx';
import Contact from './pages/contact/contact.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/side-1" element={<Projects />} />
          <Route
            path="/side-2" element={<Contact />} />
          <Route path="/side-3" element={<Side-3 />} />
        </Routes>
        <Footer />
      </div>
      </Router>
  )
}

export default App
