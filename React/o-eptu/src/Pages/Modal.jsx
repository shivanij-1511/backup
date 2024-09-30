import React from 'react';
import '../CSS/Modal.css'; // Import CSS for modal styling

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{item.name}</h2>
        <p><strong>Start Date:</strong> {item.startDate}</p>
        <p><strong>Start Time:</strong> {item.startTime}</p>
        <p><strong>End Date:</strong> {item.endDate}</p>
        <p><strong>End Time:</strong> {item.endTime}</p>
        <p><strong>Amenities:</strong> {item.amenities}</p>
      </div>
    </div>
  );
};

export default Modal;
