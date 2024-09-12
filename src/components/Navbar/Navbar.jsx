import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Custom CSS for additional styling

const DiscordNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="discord-navbar">
      <Container>
        {/* Adding pr-5 to create space between the logo and the navigation */}
        <Navbar.Brand href="#home" className="color-change d-flex align-items-center pr-5 fw-bold">
          <img
            src="https://www.svgrepo.com/show/353655/discord-icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Discord Logo"
          />
          Discord
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`navbar-toggler ${props.mode === 'light' ? '' : 'navbar-toggler-white'}`} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-bold">
            {/* Apply the same condition for Nav.Link text color */}
            <Nav.Link href="#download" className='mx-2 text-white'>Download</Nav.Link>
            <Nav.Link href="#nitro" className='mx-2 text-white'>Nitro</Nav.Link>
            <Nav.Link href="#discover" className='mx-2 text-white'>Discover</Nav.Link>
            <Nav.Link href="#safety" className='mx-2 text-white'>Safety</Nav.Link>
            <Nav.Link href="#support" className='mx-2 text-white'>Support</Nav.Link>
            <Nav.Link href="#blog" className='mx-2 text-white'>Blog</Nav.Link>
            <Nav.Link href="#careers" className='mx-2 text-white'>Careers</Nav.Link>
          </Nav>
          <div className="ml-auto login-container">
            <a 
              href="#login" 
              className="login-link bg-white text-black">
              Login
            </a>
          </div>
          <div className="form-check form-switch ml-4">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DiscordNavbar;
