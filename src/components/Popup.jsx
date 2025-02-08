// src/components/Popup.js
import Modal from 'react-modal';

function Popup({ schedules, isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Available Hangout Times</h2>
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>{schedule.time} - {schedule.event}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default Popup;