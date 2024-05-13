import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-bottom: 2.5rem;
`;

const StyledBody = styled.body`
  position: relative;
  min-height: 100vh;
`;

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Projects') {
        return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
  }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <StyledBody className='body'>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <StyledMain className="mx-3">{renderPage()}</StyledMain>
      <Footer />
    </StyledBody>
  
  );
}
