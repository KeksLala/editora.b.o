import { useEffect, useState } from 'react';
import Head from 'next/head'; 
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" /> 
        <title>Editora B.O</title> 
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
