import React from 'react';
import './Modal.css'; 

const Modal = ({ children, onClose  }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };
  
  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;