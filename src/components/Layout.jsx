import React from 'react';
import Container from './Container';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar'; // Optional, if you have one
import Footer from './Footer'; // Optional, if needed on all pages

const Layout = () => {
  return (
    <>
      <Container>
        <Outlet /> {/* This is where page-specific content will be rendered */}
      </Container>
      {/* Optional Footer */}
      <Footer />
    </>
  );
};

export default Layout;