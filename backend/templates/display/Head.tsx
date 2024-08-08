import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Quick Dapp",
  description = "Quick dapp the web 3 generator",
  keywords = "Optima, DeFI, Yield, Diversification, Gas",
  ogTitle = "Quick Dapp",
  ogDescription = "Quick dapp the web 3 generator",
  ogImage = "",
  twitterTitle = "Quick Dapp",
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
