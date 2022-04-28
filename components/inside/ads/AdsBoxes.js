import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AdsUpBox({ children, ...props }) {
    return (
        <Box w={'100%'} h={['20px', '20px', '150px']} mb={5} {...props}>
            {children}
        </Box>
    )
}

function AdsSide({ children, ...props }) {
    return (
        <Box w={'100%'} h={'auto'} m={1} {...props}>
            {children}
        </Box>
    )
}

export { AdsUpBox, AdsSide }