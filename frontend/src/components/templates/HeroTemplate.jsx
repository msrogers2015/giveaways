// src/components/Hero.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroTemplate.scss';

/**
 * Dynamic Hero or Jumbotron component.
 * @param leftCol - jsx.element: JSX component to display on the left side of the hero.
 * @param rightCol - jsx.element: JSX component to display on the right side of the hero.
 * @param main - string: Which side (left or right) is displayed on smaller screens.
 * @returns {React.JSX.Element}
 * @constructor
 *
 * Example: <Hero leftCol={heroLeft()} rightCol={heroRight()} main={'right'} />
 */
function HeroTemplate({ leftCol, rightCol, main }) {

  return (
    <section className='hero-section'>
      <Container>
        <Row className="align-items-center min-vh">
          <Col lg={6} className={main === 'left' ? 'text-center text-lg-start' : `d-none d-lg-block text-center`}>
            {leftCol}
          </Col>
          <Col lg={6} className={main === 'right' ? 'text-center text-lg-start' : `d-none d-lg-block text-center`}>
            {rightCol}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroTemplate;