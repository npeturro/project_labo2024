import './App.css'
import BeerNamePrice from './components/beers/BeerNamePrice';
import Beers from './components/beers/Beers';



function App() {

  const datos = Beers()

  return (
    <div >
      <a href='https://frro.cvg.utn.edu.ar/pluginfile.php/213521/mod_resource/content/4/Ejercitación%20Unidad%20P1.2.pdf' target='_blank'>Ejercitación practica Unidad 1.2</a>
      <p>Listado de cervezas <b>disponibles</b></p>

      <BeerNamePrice
        datos={datos}
      />

    </div >
  );
}

export default App
