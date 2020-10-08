import React from 'react';

import './styles.css'

const CursoContainerItem = ({marketImg,title,date}) => (
    <div className="courseBox">
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>CURSO-{date}</p>
    </div>
);

export default CursoContainerItem;