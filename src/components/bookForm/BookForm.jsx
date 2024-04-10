import { useState } from "react";
import React from "react";
import { Button , Form} from "react-bootstrap";

const BookForm = (props) => {
    const {
        onBookDataSaved
    } = props

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPageCount, setEnteredPageCount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

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
        setEnteredDate(event.target.value)
    };

    const submitBookHandler = (event) => {
        event.preventDefault();
        const bookData = {
            title: enteredTitle,
            author: enteredAuthor,
            pageCount: enteredPageCount,
            dateRead: Date(enteredDate).toString(),
        };
        onBookDataSaved(bookData)
        setEnteredTitle('')
        setEnteredAuthor('')
        setEnteredPageCount('')
        setEnteredDate('')
    }

    return (
        <Form onSubmit={submitBookHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredTitle}
                    onChange={changeTitleHandler}
                    type="text"
                    required
                    placeholder="Título" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredAuthor}
                    onChange={changeAuthorHandler}
                    type="text"
                    required
                    placeholder="Autor" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredPageCount}
                    onChange={changePageCountHandler}
                    type="number"
                    placeholder="Páginas"
                    required
                    min="1"
                    step="1" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredDate}
                    onChange={changeDateHandler}
                    type="date"
                    required
                    min="2019-01-01" 
                    max="2022-12-31"
                    placeholder="¿Cuándo terminaste de leer el libro?" />
            </Form.Group>
            <Button type="submit">Agregar lectura</Button>
        </Form>
    );

}

export default BookForm;