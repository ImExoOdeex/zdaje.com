import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='PL-pl'>
                <link rel="icon" href="ludziska.png" sizes='128x128' type='image/png' />
                <link rel="icon" href="ludziska.png" sizes='32x32' type='image/png' />
                <meta name="keywords"
                    content="kalkulator średniej, kalkulator średniej zwykłej, kalkulator średniej arytmetycznej, oblicz średnią, obliczator średniej, jaka jest moja średnia, kalkulator średniej ważonej, średnia, srednia, średnia szkolna,
                    szkoła, zdaje, zdaje.com, czy zdaje?, kalkulator średniej szkolnej" />
                <meta name="theme-color" content="#171923"></meta>
                <meta name="robots" content="follow" />
                <meta name="author" content=".Sizzurp" />
                <meta name="copyright" content=".Sizzurp" />
                <meta name="description" content="Oblicz swoją średnią za pomocą kalkulatora online." />
                <meta name="dcterms.subject" lang="pl" content="kalkulator średniej; kalkulator średniej zwykłej; kalkulator średniej arytmetycznej; kalkulator średniej ważonej; średnia; srednia; średnia szkolna;
                    szkoła; zdaje; zdaje.com; czy zdaje?; kalkulator średniej szkolnej"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charset="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}