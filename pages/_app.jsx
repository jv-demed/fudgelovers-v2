import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme.js';
import GlobalStyle from '../src/styles/globals.js';
import { CartProvider } from '../src/providers/CartProvider';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import '../src/styles/container.css';
import '../src/styles/typography.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Fudge Lovers</title>
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CartProvider>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </CartProvider>
            </ThemeProvider>
        </>
    )
}