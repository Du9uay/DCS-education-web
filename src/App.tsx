import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';
import HomePage from './pages/HomePage';
import AutomationControlPage from './pages/course/AutomationControlPage';
import DCSBasicsPage from './pages/course/DCSBasicsPage';
import DCSStructurePage from './pages/course/DCSStructurePage';
import DCSSignalTypesPage from './pages/course/DCSSignalTypesPage';
import DCSvsPLCPage from './pages/course/DCSvsPLCPage';
import CourseTestPage from './pages/CourseTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette intensity="strong" />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/automation-control" element={<AutomationControlPage />} />
            <Route path="/course/dcs-basics" element={<DCSBasicsPage />} />
            <Route path="/course/dcs-structure" element={<DCSStructurePage />} />
            <Route path="/course/dcs-signal-types" element={<DCSSignalTypesPage />} />
            <Route path="/course/dcs-vs-plc" element={<DCSvsPLCPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;