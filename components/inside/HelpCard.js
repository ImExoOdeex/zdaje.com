import { GridItem, useColorModeValue, WrapItem } from '@chakra-ui/react'
import React from 'react'

function HelpCard({ children, ...props }) {
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    return (
        <WrapItem w='100%' display={'block'} boxShadow={'md'} bg={bg} p={5} rounded='md' justifyContent={'space-around'} alignItems='center' {...props}>

            {children}

        </WrapItem>
    )
}

export default HelpCard