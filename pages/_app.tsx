import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Navbar from '../components/Navbar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThirdwebProvider
    desiredChainId={
      process.env.NEXT_PUBLIC_NODE_ENV !== "production"
        ? ChainId.Goerli
        : ChainId.Mainnet
    }
  >
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </ThirdwebProvider>
  );
}

export default MyApp;
