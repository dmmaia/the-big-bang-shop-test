import React from 'react';

import './styles.css';

const BlogContainerItem = ({marketImg,title,topic,author}) => (
    <div className="blogBox">
        <img src={marketImg} />
        <h2>{title}</h2>
        <p><span>{topic}</span> <span>por {author}</span></p>
    </div>
);

export default BlogContainerItem;