import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    useTitle('Category');

    return (
        <div>
            { id && <h3>This category news: {categoryNews.length}</h3>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;