import { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme.js';
import GlobalStyle from '../src/styles/globals.js';
import Header from '../src/components/header/Header';
import '../src/styles/container.css';
import '../src/styles/typography.css';

export default function App({ Component, pageProps }){

    const [shoppingCart, setShoppingCart] = useState([]);

    return(
        <>
            <Head>
                <title>Fudge Lovers</title>
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header shoppingCart={shoppingCart} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}