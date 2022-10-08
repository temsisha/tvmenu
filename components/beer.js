export default function Beer ({beer}){
    const {beerName, beerType, beerABV, beerIBU, beerLowPrice, beerHighPrice, breweryLogo} = beer.attributes;
    return (
        <div className="left-side">
            <div className="tvmenu">
                <div className="article-group">
                    <div className="logo">
                        <img src={breweryLogo.data.attributes.formats.small.url} alt="" />
                    </div>
                    <div className="brand">
                    <div className="brand-name">{beerName}</div>
                        <div className="brand-details">
                            <div className="brand-type">{beerType} <span className="separator">|</span> ABV <span className="type-detailed">{beerABV}</span> <span className="separator">|</span> IBU <span className="type-detailed">{beerIBU}</span></div>
                        </div>
                    </div>
                    <div className="brand-price">
                        <div className="price-tap-small">TAP 0.3 RSD {beerLowPrice}</div>
                        <div className="brand-price-big">TAP 0.3 RSD {beerHighPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}