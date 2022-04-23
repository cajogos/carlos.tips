import type { AppProps } from 'next/app';
import Head from 'next/head';

import MainLayout from '@/layouts/main';

import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps)
{
  return (
    <MainLayout>
      <Head>
        <title>Carlos.Tips - Collection of Random Tech Thoughts</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
