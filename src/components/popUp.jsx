import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function PopUp({ id, empName, empDescription, empImage, fn}) {
    const [show, setShow] = useState(false);
    const [value1, setValue1] = useState(empName);
    const [value2, setValue2] = useState(empDescription);
    const [value3, setValue3] = useState(empImage);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className='btn btn-dark ms-2' variant="primary" onClick={handleShow}>
            Edit
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Edit Your Profile</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form id='updateProfile' onSubmit={(e) => {
                    e.preventDefault();
                    fn(id, value1, value2, value3);
                    handleClose();
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={value1} onChange={(e)=> setValue1(e.target.value)}/>
                            {/* {console.log(value1)} */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' rows={3} type="text" placeholder="Describe yourself" value={value2} onChange={(e) => setValue2(e.target.value)}/>
                    {/* {console.log(value2)} */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Profile Picture</Form.Label>
                        <Form.Control type="text" placeholder="Image URL" value={value3} onChange={(e) => setValue3(e.target.value)}/>
                    {/* {console.log(value2)} */}
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <button form='updateProfile' className='btn btn-success'>Save</button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default PopUp;