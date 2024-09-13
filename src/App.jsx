import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiscordNavbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Card from './components/Cards/Card';

function App() {
  return (
    <>
      <DiscordNavbar/>
      <Content/>
      <Card/>
    </>
  );
}

export default App;
