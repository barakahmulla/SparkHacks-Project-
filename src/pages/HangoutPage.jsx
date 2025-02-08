// src/pages/HangoutPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';  // Ensure you've installed 'react-modal'
import Popup from '../components/Popup';

function HangoutPage({ schedules }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Hangout Times</h1>
      <button onClick={openModal}>See Available Times</button>
      <Popup
        schedules={schedules}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default HangoutPage;