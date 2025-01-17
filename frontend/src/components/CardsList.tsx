import React, { useEffect, useState } from 'react';
import Card, { CardProps } from './Card';
import '../style/CardsList.scss';
import '../style/loader.scss';

interface ICardsList {
    cardsData: ICard[] | []
    status: string
    deleteCard: (id:number) => Promise<void>
}

const CardsList = ({cardsData, status, deleteCard}: ICardsList) => {

    return (
        <>
            {status === 'loading' ? (
                <div className="loaderWrapper">
                    <div className='loader'></div>
                </div>) 
                : 
                status === 'success' ? (
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
                ) 
                : 
                (
                    <h1 style={{color:"red"}}>something went wrong...</h1>
            )}
        </>
    );
};

export default CardsList;
