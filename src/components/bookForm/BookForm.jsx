import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";

const BookForm = (props) => {
    const {
        onBookDataSaved
    } = props

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPageCount, setEnteredPageCount] = useState("");
    const [enteredCalification, setEnteredCalification] = useState("");

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value)
    };

    const changePageCountHandler = (event) => {
        setEnteredPageCount(event.target.value)
    };

    const changeDateHandler = (event) => {
        setEnteredCalification(event.target.value)
    };

    const submitBookHandler = (event) => {
        event.preventDefault();
        const bookData = {
            bookTitle: enteredTitle,
            bookAuthor: enteredAuthor,
            pageCount: enteredPageCount,
            bookRating: Array(enteredCalification).fill("*"),
            imageUrl: "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg"
        };
        onBookDataSaved(bookData)
        setEnteredTitle('')
        setEnteredAuthor('')
        setEnteredPageCount('')
        setEnteredCalification('')
    }

    return (
        <Form onSubmit={submitBookHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredTitle}
                    onChange={changeTitleHandler}
                    type="text"
                    placeholder="Título" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredAuthor}
                    onChange={changeAuthorHandler}
                    type="text"
                    placeholder="Autor" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredPageCount}
                    onChange={changePageCountHandler}
                    type="number"
                    placeholder="Páginas"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredCalification}
                    onChange={changeDateHandler}
                    type="number"
                    placeholder="Calificación" />
            </Form.Group>
            <Button type="submit">Agregar lectura</Button>
        </Form>
    );

}

export default BookForm;