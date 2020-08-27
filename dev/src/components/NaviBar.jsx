import React from 'react';
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        
        &:hover {
            color: white
        }
    }
`

const NaviBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Re React</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>

                        </Nav>
                        <Nav>
                            <Button 
                            variant="primary" 
                            className="mr-2"
                            onClick={ handleShow }>Log in</Button>
                            <Button variant="primary" onClick={ handleShow }>Sign out</Button>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>Не сообщайте свой email никому</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>
                        <Form.Group controlId='fromBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remeber me' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NaviBar;