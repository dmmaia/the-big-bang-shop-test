import React from 'react';

import './styles.css';

const BlogContainerItem = ({marketImg,title,topic,author,description}) => (
    <div className="blogBox">
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>{topic}<span>por <span>{author}</span></span></p>
        <p className="blogDescription">{description}</p>
    </div>
);

export default BlogContainerItem;