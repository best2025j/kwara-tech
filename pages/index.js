import Head from 'next/head'
import Cards from "../components/Cards";
import Content from "../components/Content";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Cards />
      <Content />
      <Footer />
    </div>
  );
}
