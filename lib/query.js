export const BEER_QUERY = `
query {
    beers (sort: "createdAt:desc", pagination: { limit: 100 }) {
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