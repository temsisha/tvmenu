export default function Beer ({beer}){
    const {beerName, beerType, beerABV, beerIBU, newBeer, beerLowPrice, beerHighPrice, breweryLogo} = beer.attributes;
    return (
        <div className="article-group">
            <div className="logo">
                <img src={breweryLogo.data.attributes.url} alt="" />
            </div>
            <div className="brand">
            <div className="brand-visability">
                <div className="brand-name">{beerName}</div>
                <div className={newBeer ? "notify-badge" : ""}> {newBeer ? "NEW" : ""}</div>
            </div>
                <div className="brand-details">
                    <div className="brand-type">{beerType} <span className="separator">|</span> ABV <span className="type-detailed">{beerABV}</span> <span className="separator">{beerIBU ? "|" : ""}</span>{beerIBU ? " IBU " : ""}<span className="type-detailed">{beerIBU}</span></div>
                </div>
            </div>
            <div className="brand-price">
                <div className="price-tap-small">TAP 0.3 RSD {beerLowPrice ? beerLowPrice : "--"}</div>
                <div className="brand-price-big">TAP 0.5 RSD {beerHighPrice ? beerHighPrice : "--"}</div>
            </div>
        </div>
    )
}
