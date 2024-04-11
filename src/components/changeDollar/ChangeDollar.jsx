import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ChangeDollar = (props) => {
    const { beers, changeDollar } = props;

    const [show, setShow] = useState(false);
    const [price, setPrice] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        e.preventDefault();
        setPrice(e.target.value);
    };

    const handleUpdate = () => {
        changeDollar(price);
        setShow(false);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Actualizar precios
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar precios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Valor del dólar actual</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={handleChange}
                                placeholder="USD"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangeDollar;
