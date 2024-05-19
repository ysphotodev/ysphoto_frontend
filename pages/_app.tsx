import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test app</title>
        <meta name="description" content="Test description" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,  viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
      <Component {...pageProps} />
    </>

  );
}
