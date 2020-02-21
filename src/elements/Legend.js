import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
//eslint-desable-next-line
const Legend = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ position: "absolute", float: "right", top: "25vh", textAlign: "left", width: "350px" }}>
            <b>Verbal Scale</b>
            <table >
                <tr>
                    <td><span role="img" aria-label="state6">🎖</span> : Training request to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state5">🏅</span> : In progress to level: Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state4">🥉</span> : Qualified</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state3">🥈</span> : Training request to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state2">🥇</span> : In progress to level: Trainer</td>
                </tr>
                <tr>
                    <td><span role="img" aria-label="state1">🏆</span> : Trainer</td>
                </tr>
            </table>
            <Button variant="primary" onClick={handleShow} style={{ marginTop: "5%", width: "200px" }}>
                Add User
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                    <Button variant="outline-primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={handleShow} style={{ marginTop: "5%", width: "200px" }}>
                Add Category
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                    <Button variant="outline-primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Legend;
