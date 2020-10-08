import React from 'react';

import './styles.css';

const MarketContainerItem = ({marketImg,name,description,price}) => (
    <div className="marketBox">
        <img src={marketImg} />
        <h2>{name}</h2>
        <p className="marketDescription">{description}</p>
        <p className="marketPrice">R$ {price}</p>
        <p className="marketBuyNow">COMPRE AGORA  ➞</p>
    </div>
);

export default MarketContainerItem;