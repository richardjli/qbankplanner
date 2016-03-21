import React, { PropTypes } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const Navigation = ({}) => (
    <div>
    <Navbar fixedTop={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"><b>QbankPlanner</b></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
              <NavDropdown title="Jump to:" id="basic-nav-dropdown">
              <MenuItem href="#1">One</MenuItem>
              <MenuItem href="#2">Two</MenuItem>
              <MenuItem href="#3">Three</MenuItem>
              <MenuItem href="#4">Four</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
     </div>
)

export default Navigation
