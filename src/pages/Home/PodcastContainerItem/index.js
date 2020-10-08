import React from 'react';

import './styles.css'

const PodcastContainerItem = ({marketImg,title,number}) => (
    <div className="podcastBox">
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>Namahcast #{number}</p>
    </div>
);

export default PodcastContainerItem;