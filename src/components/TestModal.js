import React from 'react';
import { Modal,Button } from 'react-bootstrap';

const TestModal = ({ handleClose,show,modalData }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Person detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>id : {modalData.name}</p>
                    <p>username : {modalData.username}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TestModal;