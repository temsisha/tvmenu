import Head from 'next/head'
import {useQuery } from 'urql';
import Beer from '../components/beer';
import {BEER_QUERY} from '../lib/query'

export default function Home() {
  const [results] = useQuery({query: BEER_QUERY});
  
  const {data, fetching, error} = results;

  if(fetching) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  const beers = data.beers.data;
  console.log(beers);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jpn8kiv.css" />
        <link rel="stylesheet" href="https://use.typekit.net/jpn8kiv.css" />
      </Head>

      <main>
        {beers.map((beer) => (
          <Beer beer={beer}/>
        ))}
      </main>

    </div>
  )
}
