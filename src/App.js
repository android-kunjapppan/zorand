import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;