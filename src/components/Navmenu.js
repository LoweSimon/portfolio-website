import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navmenu()    {
    return  (
        <>
            <Navbar bg="dark" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Simon Lowe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="#pastwork">Past Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#workwithme">Work With Me</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

                    <FontAwesomeIcon icon="fa-brands fa-github"/>
                </Container>
            </Navbar>
        </>
    )
}