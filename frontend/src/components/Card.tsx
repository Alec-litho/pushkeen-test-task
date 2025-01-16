import React, { useState } from 'react';
import '../style/Card.scss';

export interface CardProps {
    id: number;
    title: string;
    body: string;
    deleteCard: (id:number) => Promise<void>;
}

const Card = ({ id, title, body, deleteCard }: CardProps) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <li onClick={() => setIsSelected(prev => !prev)} className={`cardsItem ${isSelected ? 'selected' : ''}`}>
            <div className="cardHeader">
                <h3 className='cardsTitle'>{title}</h3>
                <div className='redCross' onClick={() => deleteCard(id)}></div>
            </div>
            <p className='cardsBody'>{body}</p>
        </li>
    );
};

export default Card;
