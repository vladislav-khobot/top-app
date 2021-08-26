import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>TOP-APP</title>
        <link rel="icon" ref="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
