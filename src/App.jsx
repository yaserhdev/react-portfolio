import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {

  return (
    <main>
      <Header>
        <Navbar />
      </Header>
      <About />
    </main>
  );
};

export default App;
