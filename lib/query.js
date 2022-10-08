export const BEER_QUERY = `
query {
    beers {
      data {
        attributes {
          beerName
          beerType
          beerABV
          beerIBU
          beerLowPrice
          beerHighPrice
          breweryLogo {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`