import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }



    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-2">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='me-4 text-decoration-none' to={'/category/0'}>Home</Link>
                            <Link className='me-2 text-decoration-none' to={'/about'}>About</Link>
                            <Link> Career</Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUser style={{ fontSize: 20 }} />
                            }
                            {
                                user ?
                                    <Button onClick={handleLogOut}
                                        variant="outline-secondary">LogOut</Button> :
                                    <Link to="/login">
                                        <Button variant="outline-secondary">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    );
};

export default NavigationBar;