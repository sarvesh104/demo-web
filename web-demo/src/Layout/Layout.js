import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import About from '../components/About';
import Answer from '../components/Answer';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <Intro />
      {/* <About />
      <Answer />
      <Footer /> */}
    </div>
  )
}

export default Layout;
