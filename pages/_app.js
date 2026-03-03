import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'><rect width='28' height='28' rx='8' fill='%2300d4aa'/><path d='M8 10.5C8 9.12 9.12 8 10.5 8h3.5a3.5 3.5 0 0 1 0 7h-2a1.5 1.5 0 0 0 0 3H16a.5.5 0 0 1 0 1h-1.5A3.5 3.5 0 0 1 11 15.5h2a1.5 1.5 0 0 0 0-3h-2.5A2.5 2.5 0 0 1 8 10.5z' fill='white'/></svg>"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
