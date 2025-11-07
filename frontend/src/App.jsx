/// client/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import TermsOfService from './pages/TermsOfService'; // <-- NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="terms" element={<TermsOfService />} /> {/* <-- NEW ROUTE */}
        </Route>

        
        {/* Catch-all 404 */}
        <Route path="*" element={<div>404: Not Found</div>} />
        
      </Routes>
    </Router>
  );
}

export default App;