import Head from 'next/head';
import Hero from '../components/hero';
import Highlights from '../components/highlights/highlights';
import Products from '../components/products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ammus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Highlights />
        <Products />
      </main>
    </div>
  )
}
