import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      {/* A LINHA ABAIXO ESTAVA FALTANDO */}
      <Header /> 
      
      <main>
        <About />
        <Experience />
        <Courses />
        <Portfolio />
      </main>

      <footer>
        <p>&copy; 2025 [Seu Nome Completo]. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;