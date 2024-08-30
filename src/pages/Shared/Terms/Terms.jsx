import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia placeat corrupti quae cupiditate excepturi, vel quod, esse adipisci eius magnam nam libero molestiae. Placeat in doloremque itaque odio. Labore!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;