import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscordNavbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';

function Layout() {
  
  return (
    <>
    <DiscordNavbar/>
    <Content/>
    <Card/>
    <Footer/>
    </>
  )
}

export default Layout;