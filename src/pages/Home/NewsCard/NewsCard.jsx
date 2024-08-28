import React from 'react';
import { Card, Image } from 'react-bootstrap';
import moment from 'moment';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, category_id, rating, title, author, image_url, details, total_view } = news;

    return (
        <Card>
            <Card.Header className='d-flex align-item-center'>
                <Image className='mt-2' style={{ height: 40 }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ps-2 mt-2'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format("ddd - MM - D - YYYY")}</small></p>
                </div>
                <div className='mt-4'>
                    <CiBookmark /> <CiShare2 />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;