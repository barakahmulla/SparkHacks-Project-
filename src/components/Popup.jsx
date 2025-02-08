// src/components/Popup.jsx
import Modal from 'react-modal';

function Popup({ schedules, isOpen, closeModal, deleteSchedule, editSchedule }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
      <h2>Available Hangout Times</h2>
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>
            {schedule.time} - {schedule.event}
            <button onClick={() => editSchedule(index)}>Edit</button>
            <button onClick={() => deleteSchedule(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default Popup;