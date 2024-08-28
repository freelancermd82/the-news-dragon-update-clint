import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsigts from './../EditorsInsights/EditorsInsigts';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, image_url, details, } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft /> All News in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsigts></EditorsInsigts>
        </div>
    );
};

export default News;