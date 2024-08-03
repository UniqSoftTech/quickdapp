import { AppProps } from "next/app";
import "../styles/globals.css";
import { ApiProvider } from "../context/api.context";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default App;
