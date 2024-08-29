import React from 'react';
import logo from '../../../assets/logo.png';
import { Button, Container, Image, } from 'react-bootstrap';
import moment from 'moment';
import Marquee from 'react-fast-marquee';



const Header = () => {

    return (
        <Container>
            <div className='text-center mt-4'>
                <Image src={logo} />
                <p className='mb-0'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-light'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.....
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;