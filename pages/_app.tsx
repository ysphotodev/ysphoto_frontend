import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,  viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta name="theme-color" content="#000000" />


      </Head>
      <Component {...pageProps} />
    </>

  );
}
