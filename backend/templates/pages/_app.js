import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import "../styles/public.css";
import Layout from "@/components/layout/layout";
import { Inter } from "next/font/google";
import SEOHead from "@/components/display/Head";

const activeChainId = ChainId.Mainnet;
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEOHead />
      <ThirdwebProvider
        clientId="4af4ad585e326e6e7b9f2c1fd001dee5"
        desiredChainId={activeChainId}
      >
        <main className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
