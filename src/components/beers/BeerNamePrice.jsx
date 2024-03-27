import BeerStyle from "./BeerStyle";
import { Card } from "react-bootstrap";
import BeerStyleNumber from "./BeerStyleNumber";
import Alert from 'react-bootstrap/Alert';

function BeerNamePrice(props) {

    const { datos } = props

    return (
        <div >
            {datos.map((beer, i) =>
                beer.available ? (
                    <div key={i} style={{ display: 'inline-block', margin: '10px' }}>
                        <Card style={{ width: '18rem', backgroundColor: '#FFE4E1' }}>
                            <Card.Body>
                                <Card.Title>{beer.beerName}</Card.Title>
                                <Card.Text>
                                    Precio: ${beer.price * 1010}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <p></p>
                    </div>
                ) : null
            )}
            <Alert variant="dark">
                <BeerStyleNumber
                    datos={datos}
                />
            </Alert>
            <Alert variant="dark">
                <BeerStyle
                    datos={datos}
                />
            </Alert>
        </div >
    );
}

export default BeerNamePrice