import type { AppProps } from 'next/app'
import "../styles/globals.css";
// import Layout from './layout';
import Layout from '../ components/layout';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}