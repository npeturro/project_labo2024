import React from "react";
import { Card } from "react-bootstrap";
import BookItem from "../bookItem/BookItem";

const Books = (props) => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {
                props.books.map((book, i) => {
                    return (
                        < BookItem
                            key={i} //solo porq por consola pedia una key sino cada book deberia tener un id
                            title={book.bookTitle}
                            author={book.bookAuthor}
                            rating={book.bookRating}
                            pageCount={book.pageCount}
                            imageUrl={book.imageUrl}
                        />
                    )
                })
            }
        </div>

    );
};


export default Books