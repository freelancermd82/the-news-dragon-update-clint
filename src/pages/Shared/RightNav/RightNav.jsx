import React from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../../assets/bg1.png';

const RightNav = () => {
    return (
        <Container>
            <h3 className='mb-2 mt-2'>Login With</h3>
            <div>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h4 className='mt-4 mb-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <Card className="bg-dark text-white text-center mt-4">
                    <Card.Img src={bg1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='mt-4'>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="danger">Learn More</Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </Container>
    );
};

export default RightNav;