import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/accueil';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/blog';
import Contact from './pages/contact';
import MentionsLegales from './pages/MentionsLegales';
import GitHubProfile from './components/GitHubProfile'; // Import du composant GitHubProfile
import './App.css'; 

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/github-profile" element={<GitHubProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
