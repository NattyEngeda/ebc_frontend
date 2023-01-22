import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Yene Card</title>
        {/* <meta name="robots" content="noindex,nofollow" /> */}
        <meta name="description" content="Geenerated By Alamondai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
      </main>
    </>
  )
}
