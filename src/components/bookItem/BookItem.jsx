import React from "react";
import { Card } from "react-bootstrap";

//No importo proptypes porq no lo reconoce

const BookItem = (props) => {

    const { title, author, pageCount, rating, imageUrl } = props

    return (
        <Card style={{ width: "22rem", marginTop: '3%'}} className="mx-3">
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
            </Card.Body>
        </Card>

    );
};


export default BookItem