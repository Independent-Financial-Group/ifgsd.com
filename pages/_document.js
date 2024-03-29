import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_VERCEL_ENV == "production" ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
                              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                      `}
          </Script>
        ) : (
          console.info("dev env no GA loading")
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {process.env.NEXT_PUBLIC_VERCEL_ENV == "production" ? (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      ) : null}
    </Html>
  );
}
