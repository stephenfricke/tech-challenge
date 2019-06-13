/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => (
  <Container>
    <Navbar sticky="bottom" className="small py-5 nav_footer">
      <Navbar.Collapse style={{ marginRight: '8px' }}>
        <Navbar.Text>
          &copy; 2017-2018 Company, Inc.
          <span> &middot; </span>
          <a href="#" style={{ color: 'blue' }}>Privacy</a>
          <span> &middot; </span>
          <a href="#" style={{ color: 'blue' }}>Terms</a>
        </Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#" style={{ color: 'blue' }}>Back to top</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Footer;
