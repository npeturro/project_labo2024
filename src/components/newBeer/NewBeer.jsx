import BeerForm from "../beerForm/BeerForm";
import { Accordion, Card } from "react-bootstrap";

const NewBeer = (props) => {

    const { onBeerAdded } = props

    const saveBeerDataHandler = (enteredBeerData) => {
        const beerData = {
            id: Math.random().toString(),
            ...enteredBeerData,
        };
        onBeerAdded(beerData)
    }

    return (
        <div>
            <Accordion style={{backgroundColor: '#FDEDEC'}}>
                <Accordion.Header>Agregar cerveza</Accordion.Header>
                <Accordion.Body>
                    <BeerForm onBeerDataSaved={saveBeerDataHandler} />
                </Accordion.Body>
            </Accordion>
        </div>
    );
}

export default NewBeer;

