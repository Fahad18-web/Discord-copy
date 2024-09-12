import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa'; // Importing social media icons from react-icons

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ background: '#5c3ca0' }}>
      <Container>
        {/* Social Media Icons and Links Row */}
        <Row className="mb-5 mt-4 justify-content-center">
            <div className="d-flex justify-content-center flex-wrap">
              <a href="#" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTiktok size={24} />
              </a>
            </div>
        </Row>

        {/* Footer Links */}
        <Row>
          <Col md={3} xs={6} className="mb-4">
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Download</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Nitro</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Status</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>App Directory</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>New Mobile Experience</a></li>
            </ul>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>About</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Jobs</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Brand</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Newsroom</a></li>
            </ul>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>College</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Support</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Safety</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Feedback</a></li>
            </ul>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>StreamKit</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Creators</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Community</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Developers</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Gaming</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Quests</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Official 3rd Party Merch</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Policies</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Terms</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Privacy</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Cookie Settings</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Guidelines</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Acknowledgements</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Licenses</a></li>
              <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Company Information</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
