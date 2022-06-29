import { useState } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme.js';
import GlobalStyle from '../src/styles/globals.js';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import '../src/styles/container.css';
import '../src/styles/typography.css';

export default function App({ Component, pageProps }){

    const [shoppingCart, setShoppingCart] = useState([]);

    return(
        <>
            <Head>
                <title>Fudge Lovers</title>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header shoppingCart={shoppingCart} />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    )
}