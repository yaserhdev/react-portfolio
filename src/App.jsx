import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {

  return (
    <main>
      <Header>
        <Navbar />
      </Header>
      <About />
      <Skills />
    </main>
  );
};

export default App;
