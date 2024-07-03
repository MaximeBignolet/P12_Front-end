import React from 'react';


export const Modal: React.FC = () => {
    const closeModal = () => {
        const modal = document.querySelector('.modal_container');
        const overlay = document.querySelector('.overlay');
        overlay?.remove();
        modal?.remove();
    }
  return (
    <>
    <div className="overlay" onClick={closeModal}></div>
    <div className='modal_container'>
        <div>
            Employee created successfully !
        </div>
    </div>
    </>
  );
};
