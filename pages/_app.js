import '../styles/globals.css'
import theme from '../components/theme'
import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion';
import { CSSReset } from '@chakra-ui/react';
import Fonts from '../components/Fonts';
import "focus-visible/dist/focus-visible"
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { InfoIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { CookiesProvider } from 'react-cookie';

function App({ Component, pageProps, router }) {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <SkipNavLink fontWeight={'normal'} id='main' alignItems={'center'} bg='transparent'><InfoOutlineIcon />  Skip to main content</SkipNavLink>
        <Layout router={router}>
          <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <CSSReset />
        </Layout>
      </ChakraProvider>
    </CookiesProvider>
  )
}

export default App