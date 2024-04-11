import React from "react";
import { Card } from "react-bootstrap";
import BeerItem from "../beerItem/BeerItem";

const Beers = (props) => {

    const { beers, value } = props;

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {
                props.beers.map((beer) => {
                    return (
                        < BeerItem
                            key={beer.id}
                            beerName={beer.beerName}
                            beerStyle={beer.beerStyle}
                            price={beer.price}
                            available={beer.available}
                            img={beer.img}
                            value={value}
                        />
                    )
                })
            }
        </div>

    );
};


export default Beers