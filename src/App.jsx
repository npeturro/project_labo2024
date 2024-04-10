import { useState } from 'react';
import './App.css'
import BookItem from './components/bookItem/BookItem';
import Books from './components/books/Books';
import NewBook from './components/newBook/NewBook';

function App() {

  const BOOKS = [
    {
      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Marquez",
      bookRating: Array(5).fill("*"),
      pageCount: 410,
      imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      pageCount: 256,
      imageUrl:
        "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R Tolkien",
      bookRating: Array(5).fill("*"),
      pageCount: 352,
      imageUrl:
        "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L James",
      bookRating: Array(1).fill("*"),
      pageCount: 514,
      imageUrl:
        "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
  ];

  const [books, setBooks] = useState(BOOKS)

  const addedBookHandler = (bookData) => {

    console.log('In App.js')
    console.log(bookData)
    setBooks((prev) => [...prev, bookData]);


  }

  return (
    <div >
      <a href="https://frro.cvg.utn.edu.ar/pluginfile.php/174763/mod_resource/content/4/U2.1_%20Manejo%20de%20state%20en%20React%20%281%29.pdf" target='_blank'>Ejercicio de práctica Manejo de State en React</a>
      <h2>Books Champion App</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onBookAdded={addedBookHandler} />
      <Books
        books={books}
      />

    </div >
  );
}

export default App
