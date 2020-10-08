import React from 'react';

const PodcastContainerItem = ({marketImg,title,number}) => (
    <div>
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>Namahcast #{number}</p>
    </div>
);

export default PodcastContainerItem;