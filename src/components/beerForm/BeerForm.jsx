import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";

const BeerForm = (props) => {
    const {
        onBeerDataSaved
    } = props

    const [enteredName, setEnteredName] = useState("");
    const [enteredStyle, setEnteredStyle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredAvailable, setEnteredAvailable] = useState(true);

    const changeTitleHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const changeAuthorHandler = (event) => {
        setEnteredStyle(event.target.value)
    };

    const changePageCountHandler = (event) => {
        setEnteredPrice(event.target.value)
    };

    const changeDateHandler = (event) => {
        setEnteredAvailable(event.target.value)
    };

    const submitBeerHandler = (event) => {
        event.preventDefault();
        const beerData = {
            beerName: enteredName,
            beerStyle: enteredStyle,
            price: enteredPrice,
            available: enteredAvailable,
            img: "https://acdn.mitiendanube.com/stores/001/138/589/products/6pack-wolf1-0202c4361722660e2415900730570741-480-0.webp"
        };
        onBeerDataSaved(beerData)
        setEnteredName('')
        setEnteredStyle('')
        setEnteredPrice('')
        setEnteredAvailable(true)
    }

    return (
        <Form onSubmit={submitBeerHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredName}
                    required
                    onChange={changeTitleHandler}
                    type="text"
                    placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredStyle}
                    required
                    onChange={changeAuthorHandler}
                    type="text"
                    placeholder="Estilo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredPrice}
                    required
                    onChange={changePageCountHandler}
                    type="number"
                    placeholder="Precio"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Select onChange={changeDateHandler}>
                    <option>Stock</option>
                    <option value={true}>Disponible</option>
                    <option value={false}>No disponible</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit">Agregar cerveza</Button>
        </Form>
    );

}

export default BeerForm;

