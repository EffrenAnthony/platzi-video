import React from 'react';
// import Header from './Header';
import Footer from './Footer';
// children es una palabra reservada para layout
const Layout = ({ children }) => (
  <div className="App">
    {/* <Header /> */}
    {children}
    <Footer />
  </div>
);

export default Layout;
