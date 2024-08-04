import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import "../styles/public.css";
import Layout from "@/components/layout/layout";

const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      clientId="4af4ad585e326e6e7b9f2c1fd001dee5"
      desiredChainId={activeChainId}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
