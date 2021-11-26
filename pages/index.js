import Head from 'next/head';
import Body from '../components/Body';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Hulu-Clone | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body */}
      <Body results={ results }/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then(res => res.json());
  
  return {
    props: {
      results: request.results,
    }
  }
}
