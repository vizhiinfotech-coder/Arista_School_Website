import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import Documents from './pages/Documents';
import DocumentDownload from './pages/DocumentDownload';
import Contact from './pages/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (

    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
            {/* Document download routes - specific routes for each document */}
            <Route path="/AffiliationLetter" element={<DocumentDownload />} />
            <Route path="/TrustCertificate" element={<DocumentDownload />} />
            <Route path="/NOC" element={<DocumentDownload />} />
            <Route path="/RecognitionCertificate" element={<DocumentDownload />} />
            <Route path="/BuildingSafetyCertificate" element={<DocumentDownload />} />
            <Route path="/FireSafetyCertificate" element={<DocumentDownload />} />
            <Route path="/SanitaryWaterHealthCertificate" element={<DocumentDownload />} />
            <Route path="/10thResult" element={<DocumentDownload />} />
            <Route path="/FeesStructure" element={<DocumentDownload />} />
            <Route path="/PTA" element={<DocumentDownload />} />
            <Route path="/SMC" element={<DocumentDownload />} />
            <Route path="/AcademicCalendar2025-2026" element={<DocumentDownload />} />
            <Route path="/SelfDeclaration" element={<DocumentDownload />} />
            <Route path="/SSC" element={<DocumentDownload />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;