import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import { Container, Row, Col } from 'react-bootstrap';
import './Content.css';

const Content = () => {
  const typedElement = useRef(null); // Use ref to point to the h1 element

  useEffect(() => {
    const options = {
      strings: ["Group chat that’s all fun and games"],
      typeSpeed: 150,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup the effect when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const headingFont = {
    fontFamily: 'Inter, sans-serif',
  };
  return (
    <>
      <div className="container-fluid text-white pt-16 vh-auto pb-5">
        <Row className="sm:flex items-center justify-center ml-10 pt-10">
          <Col md={6} className="sm:flex items-center flex-col p-3 max-sm:ml-10 ">
            <h1 className="fade-in display-6 fw-bold items-center justify-center text-uppercase mb-4 fs-1 w-[280px]" style={headingFont}>
            <span ref={typedElement}></span>            </h1>
            <p className="slide-in lead text-align-justify w-[280px]">
              Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp"
              alt="Background Art"
              className="img-fluid bounce"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Content;
