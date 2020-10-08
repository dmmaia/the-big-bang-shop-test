import React from 'react';

const CursoContainerItem = ({marketImg,title,date}) => (
    <div>
        <img src={marketImg} />
        <h2>{title}</h2>
        <p>CURSO-{date}</p>
    </div>
);

export default CursoContainerItem;