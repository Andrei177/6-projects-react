import React from 'react';
import '../App.css';

const Modal = ({active, setModal}) => {
  return (
    <div onClick={() => setModal(false)} className={active ? "modal active": "modal"}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
        Это модальное окно!Кликните в любом месте, чтобы закрыть модальное окно
        </div>
    </div>
  )
}

export default Modal
