import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import * as React from "react";
import MainLayout from "../components/Layout/MainLayout";
import createEmotionCache from "../config/createEmotionCache";
import theme from "../config/theme";
import { SystemProvider } from "../context/SystemContext";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout || MainLayout;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <SystemProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SystemProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
