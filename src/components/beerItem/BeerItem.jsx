import { useState } from "react";
import React from "react";
import { Button, Card } from "react-bootstrap";

const BeerItem = (props) => {

    const { id, beerName, beerStyle, price, available, img, value } = props

    const clickHandler = () => {
        setNewTitle('Valor actualizado')
    }

    return (
        <Card style={{ width: "22rem", marginTop: '3%'}} className="mx-3">
            <Card.Img
                variant="top"
                src= {img}
            />
            <Card.Body>
                <Card.Title>{beerName}</Card.Title>
                <Card.Subtitle>{beerStyle}</Card.Subtitle>
                <div>${price*value}</div>
                <p>{available ? <b>Disponible</b> : <b>No disponible</b>}</p>
            </Card.Body>
        </Card>

    );
};


export default BeerItem