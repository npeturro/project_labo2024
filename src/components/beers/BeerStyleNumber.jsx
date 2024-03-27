

function BeerStyleNumber(props) {

    const { datos } = props

    const count = datos.filter((beer) => {
        return (beer.beerStyle === 'Red' || beer.beerStyle === 'IPA') 
    })

    return (
        <div>
            <p>Vendemos un total de {count.length} cervezas Red e IPA</p>
        </div>
    )

}

export default BeerStyleNumber