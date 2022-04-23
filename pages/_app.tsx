import '../styles/main.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/main';

function MyApp({ Component, pageProps }: AppProps)
{
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
