import React, { useRef, useState } from "react"
import "../style/CardModal.scss"
interface ICardModal {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    publishCard: (data:CardDto) => Promise<void>
}

export default function CardModal({setModal, publishCard}:ICardModal) {
    let body = useRef<string>("");
    let title = useRef<string>("");
    let [bodyValid, setBodyValid] = useState(true);
    let [titleValid, setTitleValid] = useState(true)


    function handleModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>):void {
        e.stopPropagation()
        setModal((prev:boolean) => !prev)
    }
    function handleValidation() {
        let [bLen, tLen] = [body.current.length,  title.current.length]
        if(bLen==0|| tLen==0) {
            bLen==0 ? setTitleValid(false) : setTitleValid(true)
            tLen==0 ? setBodyValid(false) : setBodyValid(true)
            return false
        } 
        return true

    }
    return (
        <div className="modal">
            <div className="bg" onClick={(e) => handleModal(e)}></div>
            <div className="modalBody">
                <div className="title">
                    <div className="lab">
                        <label htmlFor="titleInput">Title</label>
                        {!titleValid && <span className="error">title is empty</span>}
                    </div>
                    <input type="text" name="titleInput" onInput={(e:any) => title.current = e.target.value} />
                </div>
                <div className="body">
                    <div className="lab">
                        <label htmlFor="bodyInput">Body</label>
                        {!bodyValid && <span className="error">body is empty</span>}
                    </div>
                    <textarea name="bodyInput" onInput={(e:any) => body.current = e.target.value} />
                </div>
                <div className="finishBtn">
                    <button onClick={() => handleValidation()? publishCard({body:body.current, title:title.current}) : null}>finish</button>
                </div>
            </div>
        </div>
    )
}