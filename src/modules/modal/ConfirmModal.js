import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = ({
  toggleModal,
  show,
  agreeAction,
  cancelAction,
  message,
}) => (
  <Modal
    show={show}
    onHide={toggleModal}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
      <p>{message}</p>
      <div>
        <Button variant="success" onClick={agreeAction}>
          Proceed
        </Button>
        <Button variant="danger" onClick={cancelAction}>
          Stop
        </Button>
      </div>
    </Modal.Body>
  </Modal>
);

ConfirmModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  agreeAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmModal;
