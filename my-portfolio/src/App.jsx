import React from 'react';
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
  return (
    <>
     <NotfcationBaar/>
      <TopNav />
      <div className="app">
       
        <div className="content_1">
          <Header  /> {/* Header section, with the id="about" */}
          <div className="psgeDoen">
            <NextPage />
          </div>
          <Cv id="cv" /> {/* CV section, with the id="cv" */}
        </div>

        <div className="content">
          <section id="about"  className="projects"> {/* Interviews section */}
            <Interviews />
          </section>
          <section id="talks" className="talks"> {/* Talks section */}
            <Talks />
          </section>
          <section id="projects" className="interviews"> {/* Projects section */}
            <Projects />
          </section>
          <section id="projects" className="interviews"> {/* Projects section */}
            <BlockchainManager />
          </section>
        </div>
      </div>
      <Contact/>
      <Footer id="contact" /> {/* Footer section, with the id="contact" */}
    </>
  );
}

export default App;
