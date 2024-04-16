import './App.css'
import BookItem from './components/bookItem/BookItem';
import Books from './components/books/Books';
import TableIncome from './components/table/tableIncome';

function App() {

  const netIncomes = [
    {
      brand: 'McDonalds',
      income: 1291283
    },
    {
      brand: 'Burger King',
      income: 1927361
    },
    {
      brand: 'KFC',
      income: 1098463
    }
  ]

  return (
    <div >
      <a href="https://frro.cvg.utn.edu.ar/mod/assign/view.php?id=57677" target='_blank'>Práctica Obligatoria 2</a>
      <h2>Ingresos Brutos por compañia</h2>
      <TableIncome 
        data = {netIncomes}
      />

    </div >
  );
}

export default App
