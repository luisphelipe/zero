import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import "./modal-styles.css";

function ErrorModal({ error, close }: any) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      className="Modal"
      overlayClassName="Overlay"
    >
      <p>{error}</p>
      <Button onClick={close}>Ok!</Button>
    </Modal>
  );
}

export default ErrorModal;
