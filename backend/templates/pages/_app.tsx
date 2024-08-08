import React from "react";
import { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import "../styles/public.css";
import { Inter } from "next/font/google";
import SEOHead from "@/components/display/Head";
import Layout from "@/components/display/Layout";

const activeChainId = ChainId.Mainnet;
const inter = Inter({ subsets: ["latin"] });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEOHead />
      <ThirdwebProvider
        clientId="4af4ad585e326e6e7b9f2c1fd001dee5"
        activeChain={activeChainId}
        // desiredChainId={activeChainId}
      >
        <main className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThirdwebProvider>
    </>
  );
};

export default MyApp;
