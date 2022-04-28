import React from 'react'
import { Flex } from '@chakra-ui/react'
import Footer from './footer/Footer'
import Header from './header/Header'
import { AnimateSharedLayout } from 'framer-motion'
import { SkipNavContent } from '@chakra-ui/skip-nav'
import { AdsSide } from './inside/ads/AdsBoxes'


const w = '0px'
function Side({ children, ...props }) {
    return (
        <Flex display={{ base: 'none', md: 'flex' }} flexDir={'column'} borderRadius={'md'} borderWidth={w}
            borderColor={'green.500'} w='15%' {...props}>
            <AdsSide>
                {/* here code for ads */}
            </AdsSide>
            {children}
        </Flex>
    )
}

function Layout({ children }) {
    return (
        <Flex flexDir={'column'}>
            <Header />
            <AnimateSharedLayout>
                <Flex as={'main'} flexDir={'row'} w='100%' borderRadius={'md'} borderColor='teal.500' borderWidth={w}>
                    <Side />
                    <Flex id='main' as={'section'} borderRadius={'md'} borderColor='pink.500' borderWidth={w} flexDir='column' w={{ base: '100%', md: '70%' }} minH={'calc(100vh - 260px)'}>
                        <SkipNavContent id='main'></SkipNavContent>
                        {children}
                    </Flex>
                    <Side />
                </Flex>
                <Footer />
            </AnimateSharedLayout>
        </Flex>
    )
}

export default Layout