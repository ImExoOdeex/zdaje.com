import { Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'


const w = '0px'
function Side({ children, ...props }) {
    return (
        <Flex display={{ base: 'none', md: 'flex' }} flexDir={'column'} borderRadius={'md'} borderWidth={w}
            borderColor={'green.500'} w='15%' {...props}>
            {children}
        </Flex>
    )
}

function Layout({ children }) {
    return (
        <Flex flexDir={'column'}>
            <Header />
            <Flex flexDir={'row'} w='100%' borderRadius={'md'} borderColor='teal.500' borderWidth={w}>
                <Side />
                <Flex borderRadius={'md'} borderColor='pink.500' borderWidth={w} flexDir='column' w={{ base: '100%', md: '70%' }} minH={'calc(100vh - 260px)'}>
                    {children}
                </Flex>
                <Side />
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Layout