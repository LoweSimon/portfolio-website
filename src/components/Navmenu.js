import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Container from 'react-boostrap/Container';
import Navbar from 'react-boostrap/Navbar';
import Nav from 'react-boostrap/Nav';

export default function Navmenu()    {
    return  (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Simon Lowe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.link href="#pastwork">Past Work</Nav.link>
                        <Nav.link href="#skills">Skills</Nav.link>
                        <Nav.link href="#workwithme">Work With Me</Nav.link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}