import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {process.env.NEXT_PUBLIC_VERCEL_ENV == "production" ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            console.log('Starting GTM')
            {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.GTM_ID}');
            `}
          </Script>
        ) : null}
      </Head>
      <NextNProgress color="#F47E50" />
      <ClerkProvider
        {...pageProps}
        appearance={{ elements: { footer: "hidden" } }}
      >
        <Component className="box-border" {...pageProps} />
        <Analytics />
      </ClerkProvider>
      {process.env.NEXT_PUBLIC_VERCEL_ENV == "production" ? (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      ) : null}
    </>
  );
}

export default MyApp;
