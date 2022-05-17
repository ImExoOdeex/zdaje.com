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
import { Chakra } from '../components/Chakra';

export default function App({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <CookiesProvider>
        <Fonts />
        <SkipNavLink fontWeight={'normal'} id='main' alignItems={'center'} bg='transparent'><InfoOutlineIcon />  Skip to main content</SkipNavLink>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter={true} initial>
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
            <CSSReset />
          </Layout>
        </AnimatePresence>
      </CookiesProvider>
    </Chakra>
  )
}

export { getServerSideProps } from "../components/Chakra";