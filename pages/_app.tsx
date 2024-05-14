import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
