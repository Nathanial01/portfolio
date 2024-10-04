import React, { useState } from 'react';
import NotfcationBaar from './components/NotificationBar.jsx';
import TopNav from './components/TopNav.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Talks from './components/Talks.jsx';
import Interviews from './components/Interviews.jsx';
import Cv from './components/Cv.jsx';
import NextPage from './components/NextPage.jsx';
import BlockchainManager from './components/BlockchainManager.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };


  const containsSearchTerm = (text) => {
    return text.toLowerCase().includes(searchTerm);
  };

  return (
    <>
      <NotfcationBaar />
      <TopNav onSearch={handleSearch} /> {/* Pass the search handler to TopNav */}
      <div className="app">
        <div className="content_1">
          <Header /> {/* Header section */}
          <div className="psgeDoen">
            <NextPage />
          </div>
          <Cv id="cv" />
        </div>

        <div className="content">
          <section id="about" className="projects">
            {containsSearchTerm('interviews') && <Interviews />} {/* Conditionally render based on search term */}
          </section>
          <section id="talks" className="talks">
            {containsSearchTerm('talks') && <Talks />}
          </section>
          <section id="projects" className="interviews">
            {containsSearchTerm('projects') && <Projects />}
          </section>
          <section id="blockchain" className="blockchain">
            {containsSearchTerm('blockchain') && <BlockchainManager />}
          </section>
        </div>
      </div>
      <Contact />
      <Footer id="contact" />
    </>
  );
}

export default App;
