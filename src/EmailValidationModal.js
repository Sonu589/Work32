
import React from "react";
import Modal from "react-modal";

const EmailValidationModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Email Validation Modal"
      className="modal"
    >
      <h2>Invalid Email</h2>
      <p>Please enter a valid email address.</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default EmailValidationModal;
