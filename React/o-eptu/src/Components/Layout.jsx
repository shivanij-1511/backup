import React from 'react';
import '../CSS/Layout.css';
import Navbar from './Navbar';
import Homepage from '../Pages/Homepage';
import Footer from '../Pages/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header"><Navbar/></header>
      {/* <main className="main"><Homepage/></main> */}
      <footer className="footer"><Footer></Footer></footer>
    </div>
  );
};

export default Layout;
