import React, { Component } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

export default class OutsideNavbar extends Component {
    render() {
        return (
            <Navbar expand='lg'>
                <Navbar.Brand href='#home' className="brand">
                    <h3 className="mb-0">COMPANY</h3>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="line"></div>
                        </div>
                        <h5 className="mb-0">NAME</h5>
                        <div className="d-flex align-items-center">
                            <div className="line"></div>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='#founders'>Founders</Nav.Link>
                        <Nav.Link href='#beneficiaries'>Beneficiaries</Nav.Link>
                        <Nav.Link href='#scholarships'>Scholarships</Nav.Link>
                        <Nav.Link href='#press'>Press</Nav.Link>
                        <Nav.Link href='#blog'>Blog</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
