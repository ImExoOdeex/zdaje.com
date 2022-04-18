import { Flex, Heading, shouldForwardProp, Text, useColorModeValue } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion';
import React from 'react'
import Link from '../components/Link'

function s404() {
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    return (
        <>
            <Flex m={'auto'} mt='200px' flexDir={'column'} alignItems='center'>
                <Heading>404 | Nie ma takiego linku</Heading>
                <Text mt='5px' fontWeight={'normal'}>Taka strona nie istnieje 😢</Text>
                <Link mt='10px' href={'/'} _hover={{ bg: 'rgba(102, 237, 255, 0.1)' }}
                    color={tealColor} py={5} px={7} rounded='md' alignItems={'center'}>
                    <Text _hover={{ borderBottom: '2px solid', borderColor: '#ff63c3' }}>
                        Powrót do strony głównej
                    </Text>
                </Link>
            </Flex>
        </>
    )
}

export default s404