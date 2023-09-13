import React, { useRef } from 'react';
import '../App.css';

const Modal = ({add, setAdd}) => {
  const content = useRef();
  const modal = useRef();

  return (
    <div ref={modal} className={add?"modal":"modal noneM"} onClick={() => {modal.current.classList.add("noneM"); setAdd(false)} }>
        <div ref={content} className='modal__content' onClick={e => e.stopPropagation()}>
        Это модальное окно!Кликните в любом месте, чтобы закрыть модальное окно
        </div>
    </div>
  )
}

export default Modal
