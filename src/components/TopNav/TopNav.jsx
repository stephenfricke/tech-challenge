import React from 'react';
import {
  Navbar, Nav, Button, Form, FormControl,
} from 'react-bootstrap';
import './TopNav.css';

const TopNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#carousel">Carousel</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
      </Nav>
      <Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

TopNav.propTypes = {
};
TopNav.defaultProps = {
};

export default TopNav;
