import { useState } from "react";
import React from "react";
import { Button, Card } from "react-bootstrap";

const BookItem = (props) => {

    const { title, author, pageCount, rating, imageUrl } = props

    const [newTitle, setNewTitle] = useState(title)

    const clickHandler = () => {
        setNewTitle('Valor actualizado')
    }

    return (
        <Card style={{ width: "22rem", marginTop: '3%'}} className="mx-3">
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{newTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
                <Button onClick={clickHandler}>Cambiar título</Button>
            </Card.Body>
        </Card>

    );
};


export default BookItem