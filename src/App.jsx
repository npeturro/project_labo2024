import { useState } from 'react';
import './App.css'
import Beers from './components/beers/Beers';
import NewBeer from './components/newBeer/NewBeer';
import ChangeDollar from './components/changeDollar/ChangeDollar';

function App() {

  const BEERS = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/infrared-ipa1-1083f69ad4f694eca516920186781053-480-0.webp"
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-4Q4GwPTcpwkSXXsgmHf0ZoNc6T2jzgZRF3v-PxUyTvP27VN3-7PStdqImAJpZ8g-JYjsS13_znuAk81U-C_K6IZiqw3u29p7zWmodHviZbeObnX1P-4e&usqp=CAE"
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAxhjxX_S2WhzU4D-1cfwJjysTVJ_up_YkRlGRwIhKlpy0LBk5_W2ooEyZrdd6wUE4jAYnWUSzk67D8-rBv9XfDO4-NPwsHLP4jMbN00k-uePs2TfdO5LWW14&usqp=CAE"
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/scottish1-7004b84bfa7b733cf815875021121151-1024-1024.jpg"
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/temple-lemon-hazy-ipa1-e8d15536adce63f3dd16246517632291-480-0.webp"
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/temple_revolution-lata1-4f4ea414911a03c16016203384995528-480-0.webp"
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/honey1-096afff36a1ab9718915875021209136-480-0.webp"
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/sin-alcohol1-c842188a9838bc889116916743992526-640-0.webp"
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
      img: "https://acdn.mitiendanube.com/stores/001/138/589/products/wolf-ipa1-d2ad17bc74ec2c202415895600325821-480-0.webp"
    },
  ];

  const [beers, setBeers] = useState(BEERS)
  const [value, setValue] = useState(1)

  const addedBeerHandler = (beerData) => {
    setBeers((prev) => [...prev, beerData]);
  }

  const changeDollarHandler = (price) => {
    setValue(price)
  }

  return (
    <div >
      <a href="https://frro.cvg.utn.edu.ar/pluginfile.php/215033/mod_resource/content/6/Ejercitación%20Unidad%20P2.1.pdf" target='_blank'>Ejercitación Unidad P2.1</a>
      <h2>Beers App</h2>
      <div style={{margin: 15}}>
        <ChangeDollar
          beers={beers}
          changeDollar={changeDollarHandler}
        />
      </div>
      <NewBeer onBeerAdded={addedBeerHandler} />
      <Beers
        value={value}
        beers={beers}
      />
    </div >
  );
}

export default App
