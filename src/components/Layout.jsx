import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Optional Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* Optional Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;