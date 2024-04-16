import Table from 'react-bootstrap/Table';

function TableIncome(props) {

  const average = (values) => {
    const suma = values.reduce((total, marca) => total + marca.income, 0);
    const average = suma / values.length;
    return (
      <p>El promedio de <b>Ingreso Neto</b> de todas las marcas es {average.toFixed(2)}</p>
    );
  }
  
  return (
    <div>
      <p>Total de marcas encontradas: {props.data.length}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((marca, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{marca.brand}</td>
              <td>{marca.income}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {average(props.data)}
    </div>
  );
}

export default TableIncome;