import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './styles/variables.css';

// Pages
import Home from '@/pages/Home/Home';
import VisionPage from '@/pages/VisionPage/VisionPage';
import ProgramsPage from '@/pages/ProgramsPage/ProgramsPage';
import TeamPage from '@/pages/TeamPage/TeamPage';
import DonationPage from '@/pages/DonationPage/DonationPage';
import GalleryPage from '@/pages/GalleryPage/GalleryPage';
import ContactPage from '@/pages/ContactPage/ContactPage';

// Components
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
        <main style={{ 
          flex: '1 0 auto', 
          width: '100%',
          marginTop: '0' 
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
