import '../styles/globals.css'
import theme from '../components/theme'
import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion';
import { CSSReset } from '@chakra-ui/react';
import Fonts from '../components/Fonts';

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <CSSReset />
      </Layout>
    </ChakraProvider>
  )
}

export default App