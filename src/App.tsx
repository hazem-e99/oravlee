import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import SupportPage from './components/pages/SupportPage';
import TrainingPage from './components/pages/TrainingPage';
import ImplementationPage from './components/pages/ImplementationPage';
import AboutPage from './components/pages/AboutPage';
import PayrollSystemPage from './components/pages/PayrollSystemPage';
import HRSystemPage from './components/pages/HRSystemPage';
import ProfessionalServicesPage from './components/pages/ProfessionalServicesPage';
import ProjectManagementPage from './components/pages/ProjectManagementPage';
import ScrollToTop from './components/ScrollToTop';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-light-gray">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/payroll-system" element={<PayrollSystemPage />} />
            <Route path="/hr-system" element={<HRSystemPage />} />
            <Route path="/professional-services" element={<ProfessionalServicesPage />} />
            <Route path="/project-management" element={<ProjectManagementPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
