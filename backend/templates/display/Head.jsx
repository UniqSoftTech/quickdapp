import Head from "next/head";
import Script from "next/script";

const SEOHead = ({
  title = "QuickDapp",
  description = "Generate your web3 website",
  keywords = "Optima, DeFI, Yield, Diversification, Gas",
  ogTitle = "QuickDapp",
  ogDescription = "Generate your web3 website",
  ogImage = "",
  twitterTitle = "QuickDapp",
  twitterDescription = "https://x.com/",
  twitterImage = "",
  canonicalUrl = "https://theoptima.xyz/",
}) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#07C48F" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    </>
  );
};

export default SEOHead;
