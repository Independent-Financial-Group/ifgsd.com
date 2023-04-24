import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component className="box-border" {...pageProps} />
      <Script src='../node_modules/flowbite/dist/flowbite.min.js' />
    </>
  );
}

export default MyApp;
