import React, { useEffect, useState } from 'react';
import Card, { CardProps } from './Card';
import '../style/CardsList.scss';

interface ICardsList {
    cardsData: ICard[] | []
    status: string
    deleteCard: (id:number) => Promise<void>
}

const CardsList = ({cardsData, status, deleteCard}: ICardsList) => {

    return (
        <>
            {status === 'loading' ? (
                <div>loading...</div>
            ) : status === 'success' ? (
                <ul className='CardsList'>{
                    cardsData && cardsData.map((card) => 
                        <Card key={card.id} 
                            title={card.title} 
                            body={card.body} 
                            id={card.id} 
                            deleteCard={deleteCard}
                        />
                    )
                    }</ul>
            ) : (
                <div>something went wrong...</div>
            )}
        </>
    );
};

export default CardsList;
