import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const JokerModal = ({ toggleModal, show, message }) => (
  <Modal
    show={show}
    onHide={toggleModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <div>
        <Button onClick={toggleModal}>X</Button>
      </div>
      <p>{message}</p>
    </Modal.Body>
  </Modal>
);

JokerModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default JokerModal;
