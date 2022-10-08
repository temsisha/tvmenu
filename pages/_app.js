import '../styles/globals.css'
import {Provider, createClient } from "urql";

const client = createClient({url: 'https://dry-earth-18608.herokuapp.com/graphql'});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
