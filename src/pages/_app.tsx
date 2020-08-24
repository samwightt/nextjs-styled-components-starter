import Head from "next/head";

/**
 * Wrap all pages with the Inter UI font and set the global font-family to using Inter.
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyApp;
