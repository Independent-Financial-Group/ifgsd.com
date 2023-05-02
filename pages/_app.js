import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

import favicon from "../public/logo.ico"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="icon" type="image/png" href={favicon} />
    </Head>
      <Component className="box-border" {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </>
  );
}

export default MyApp;
