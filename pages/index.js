import 'normalize.css';
import Head from 'next/head';
import Header from '../components/header';

const themeScript = `
  var themes = ['cyber-yellow', 'wisteria', 'yale-blue', 'cadet-blue-crayola', 'blaze-orange', 'light-salmon', 'viridian-green'];
  var randomTheme = themes[Math.floor(Math.random() * themes.length)];
  document.documentElement.dataset.theme = randomTheme;
`;

export default function Home() {
  return (
    <main>
      <Head>
        <title>peksipatongeis</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <Header />
    </main>
  );
}
