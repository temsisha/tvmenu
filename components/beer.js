export default function Beer ({beer}){
    const {beerName, beerType, beerABV, beerIBU, newBeer, beerLowPrice, beerHighPrice, breweryLogo} = beer && beer.attributes;
    console.log(beer && beer.attributes.breweryLogo.data.attributes.url)
    return (
        <div className="article-group">
            <div className="logo">
                <img src={beer ? beer.attributes.breweryLogo.data.attributes.url : "https://res.cloudinary.com/dal7ujss6/image/upload/v1667592458/Untitled-1_cdauxz.png"} alt="" />
            </div>
            <div className="brand">
            <div className="brand-visability">
                <div className="brand-name">{beerName}</div>
                <div className={newBeer ? "notify-badge" : ""}> {newBeer ? "NEW" : ""}</div>
            </div>
                <div className="brand-details">
                    <div className="brand-type">{beerType} <span className="separator">|</span> ABV <span className="type-detailed">{beerABV}</span> <span className="separator">|</span> IBU <span className="type-detailed">{beerIBU}</span></div>
                </div>
            </div>
            <div className="brand-price">
                <div className="price-tap-small">TAP 0.3 RSD {beerLowPrice ? beerLowPrice : " ---"}</div>
                <div className="brand-price-big">TAP 0.5 RSD {beerHighPrice ? beerHighPrice : " ---"}</div>
            </div>
        </div>
    )
}
