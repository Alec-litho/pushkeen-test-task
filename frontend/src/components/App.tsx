import '../style/App.scss';
import React, { useEffect, useRef, useState } from 'react';
import CardsList from './CardsList';
import Rectangle from './Rectangle';
import CardModal from './CardModal';

function App() {
    let app = useRef<HTMLDivElement | null>(null);
    let [modal, setModal] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [cardsData, setCardsData] = useState<ICard[] | []>([]);

    async function fetchRequest() {
        setStatus('loading');
        const data = await fetch('https://pushkeen-test-task-server.vercel.app/api/cards');
        const cards = await data.json();
        setCardsData(cards);
        setStatus('success');
    }
    async function publishCard(data:{title:string,body:string}) {
        try {
            let result = await fetch('https://pushkeen-test-task-server.vercel.app/api/cards', {
                method:"POST",
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(data)
            })
            let card = await result.json()
            setCardsData(prev => [...prev, card])
            setModal(prev => !prev)
        } catch (error) {
            console.error(error)
        }
      
    }
    async function deleteCard(id:number) {
        try {
            let result = await fetch(`https://pushkeen-test-task-server.vercel.app/api/cards${id}`, {
                method:"DELETE",
                headers: {'Content-Type': 'application/json;charset=utf-8'}
            })
            setCardsData(prev => prev.filter(cardData => cardData.id !== id))
            console.log(result)
        } catch (error) {
            console.error(error)
        }
      
    }
    useEffect(() => {
        fetchRequest();
    }, []);


    return (
        <div className="app" ref={app}>
            <CardsList cardsData={cardsData} status={status} deleteCard={deleteCard}/>
            <Rectangle />
            <div className="createCard">
                <button className="btn" onClick={() => setModal(!modal)}>create</button>
            </div>
            {modal && <CardModal setModal={setModal} publishCard={publishCard}/>}
        </div>
    );
}

export default App;
