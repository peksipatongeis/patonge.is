import 'normalize.css';
import Head from 'next/head';
import Header from '../components/header';
import randomizerScript from '!raw-loader!../components/themeRandomizer';

export default function Home() {
  return (
    <main>
      <Head>
        <title>peksipatongeis</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: randomizerScript }} />
      </Head>
      <Header />
    </main>
  );
}
