import Head from 'next/head';
<<<<<<< HEAD:src/pages/index.jsx
import Main from '@/components/Main';
import Team from '@/components/team';
import Awards from '@/components/awards';
import Contact from '@/components/contact';
=======
import Main from '@components/Main';
import Team from '../components/Team';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
>>>>>>> 7d1d388f2c077cb2a29b1d323cd47181a279827c:pages/index.jsx


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