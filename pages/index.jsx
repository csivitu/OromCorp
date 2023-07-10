import Head from 'next/head';
import Main from '@components/Main';
import Team from '../components/Team';
import Awards from '../components/Awards';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Orom Corp</title>
        <meta name='Orom Crop' content='Provides customer services ranging from logistics, IT services, and educational services.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <Team />
      <Awards />
      <Contact />
    </div>
  );
}