import React from 'react';

import './styles.css';

const BlogContainerItem = ({marketImg,title,topic,author}) => (
    <div className="blogBox">
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>{topic}<span>por <span>{author}</span></span></p>
    </div>
);

export default BlogContainerItem;