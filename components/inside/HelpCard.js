import { GridItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function HelpCard() {
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    return (
        <GridItem minH={'100px'} colSpan={2} boxShadow={'md'} bg={bg} p={5} rounded='md' justifyContent={'space-around'} alignItems='center'>



        </GridItem>
    )
}

export default HelpCard