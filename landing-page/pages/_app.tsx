import { AppProps } from "next/app";
import "../styles/globals.css";
import { ApiProvider } from "../context/api.context";
import { ToastProvider } from "../context/toast.context";

function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ApiProvider>
        <Component {...pageProps} />
      </ApiProvider>
    </ToastProvider>
  );
}

export default App;
