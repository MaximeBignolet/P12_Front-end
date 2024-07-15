import React, { useRef } from 'react';


export const Modal: React.FC = () => {
    const overlay = useRef<HTMLDivElement | null>(null);
    const modal = useRef<HTMLDivElement | null>(null);
    const closeModal = () => {
        modal.current?.remove();
        overlay.current?.remove();
    }
  return (
    <>
    <div className="overlay" onClick={closeModal} ref={overlay}></div>
    <div className='modal_container' ref={modal}>
        <div>
            Employee created successfully !
        </div>
    </div>
    </>
  );
};
