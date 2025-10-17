import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Courses />
        <Certifications />
        <Portfolio />
      </main>
      <footer>
        <p>&copy; 2025 David Braga. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;