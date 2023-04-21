import { createPortal } from "react-dom";
import React, { FC } from "react";
import s from './Modal.module.scss'


export type ModalType = {
    showModal: boolean,
    setShowModal: (value: boolean) => void
}


const ModalWindow: FC<ModalType> = ({ showModal, setShowModal }) => {
    const handleCloseModal = () => {
        setShowModal(false)
    }
    return showModal
        ? createPortal(
            <div>
                <div onClick={handleCloseModal} className={s.modalForm} >
                    <div className={s.modalMessage}>Your message was send. I will answer you as soon as possible.</div>
                    <button onClick={handleCloseModal} className={s.modalButton}> ok </button>
                </div>
            </div>
            , document.getElementById("modal") as HTMLElement)
        : null

}

export default ModalWindow