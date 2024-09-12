import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiscordNavbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';

function App() {
  // Set the default mode to 'default' which is blue
  const [mode, setMode] = useState('default');

  const toggleMode = () => {
    if (mode === 'default') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'; // Dark mode background
    } else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background
    } else {
      setMode('default');
      document.body.style.backgroundColor = 'primary'; // Default blue background
    }
  };

  return (
    <>
      <DiscordNavbar mode={mode} toggleMode={toggleMode} />
      <Content mode={mode} />
      <Card mode={mode} />
      <Footer />
    </>
  );
}

export default App;
