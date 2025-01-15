import React, { useState } from 'react';
import '../style/Card.scss';

export interface CardProps {
    id: number;
    title: string;
    body: string;
    deleteCard: (id:number) => Promise<void>;
}

const Card = ({ id, title, body, deleteCard }: CardProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <li onClick={() => setSelected(prev => !prev)} className={`cardsItem ${selected ? 'selected' : ''}`}>
            <div className="cardHeader">
                <h3 className='cardsTitle'>{title}</h3>
                <div className='redCross' onClick={() => deleteCard(id)}></div>
            </div>
            <p className='cardsBody'>{body}</p>
        </li>
    );
};

export default Card;
