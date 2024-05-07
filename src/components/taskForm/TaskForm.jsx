import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";

const TaskForm = (props) => {
    const {
        onTaskDataSaved
    } = props

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const changeAuthorHandler = (event) => {
        setEnteredDescription(event.target.value)
    };


    const submitTaskHandler = (event) => {
        event.preventDefault();
        const taskData = {
            title: enteredTitle,
            description: enteredDescription,
        };
        onTaskDataSaved(taskData)
        setEnteredTitle('')
        setEnteredDescription('')
    }

    return (
        <Form onSubmit={submitTaskHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredTitle}
                    required
                    onChange={changeTitleHandler}
                    type="text"
                    placeholder="Título" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                    value={enteredDescription}
                    required
                    onChange={changeAuthorHandler}
                    type="text"
                    placeholder="Descripción" />
            </Form.Group>
            <Button type="submit">Agregar tarea</Button>
        </Form>
    );

}

export default TaskForm;

