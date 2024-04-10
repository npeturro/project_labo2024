import BookForm from "../bookForm/BookForm";
import { Accordion, Card } from "react-bootstrap";

const NewBook = (props) => {

    const { onBookAdded } = props

    const saveBookDataHandler = (enteredBookData) => {
        const bookData = {
            ...enteredBookData,
            id: Math.random().toString(),
        };
        onBookAdded(bookData)
    }

    return (
        <div>
            <Accordion style={{backgroundColor: '#FDEDEC'}}>
                <Accordion.Header>Agregar lectura</Accordion.Header>
                <Accordion.Body>
                    <BookForm onBookDataSaved={saveBookDataHandler} />
                </Accordion.Body>
            </Accordion>
        </div>
    );
}

export default NewBook;