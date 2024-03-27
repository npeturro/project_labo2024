

function BeerStyle(props) {

    const { datos } = props

    const style = datos.map((beer) => {
        if (beer.available === true) {
            return (beer.beerStyle + ' ')
        }
    })

    return (
        <div>
            <p>Tenemos disponibles <b>{style}</b></p>
        </div>
    )

}

export default BeerStyle