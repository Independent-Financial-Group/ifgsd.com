import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="icon" type="image/png" href="/logo.ico" />
    </Head>
      <NextNProgress />
      <Component className="box-border" {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </>
  );
}

export default MyApp;
