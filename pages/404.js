import { ArrowUpIcon } from '@chakra-ui/icons';
import { Flex, Heading, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Link from '../components/Link'

function s404() {
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const [drag, setDrag] = useState('drag this!!!')
    function handleDrag() {
        setDrag('na maxa!!!')
    }
    const router = useRouter()
    return (
        <>
            <Flex m={'auto'} flexDir={'column'} alignItems='center' >
                <Heading>404 | Nie ma takiego linku</Heading>
                <Text mt='5px' fontWeight={'normal'}>Taka strona nie istnieje 😢</Text>
                <Flex transition={'.1s'} as={motion.a} dragConstraints={{
                    top: -500,
                    left: -1000,
                    right: 1000,
                    bottom: 500,
                }} dragTransition={{ bounceStiffness: 300, power: 20 }} whileDrag={handleDrag}
                    onClick={() => router.back()}
                    drag mt='10px' cursor={'pointer'} _hover={{ bg: 'rgba(102, 237, 255, 0.1)' }}
                    color={tealColor} py={5} px={7} rounded='md' alignItems={'center'} _focus={'none'}>
                    <Text as={motion.p} layout >
                        <chakra.span _hover={{ borderBottom: '2px solid', borderColor: '#ff63c3' }}> Powróć do ostatniego linku </chakra.span>
                    </Text>
                </Flex>
                <motion.svg style={{ width: '25px', position: 'absolute', marginTop: '130px', marginRight: '200px' }}
                    initial={{ rotate: 0 }} animate={{ rotate: 45, transition: { duration: 0.7 } }}
                    viewBox="0 0 24 24" focusable="false" class="chakra-icon css-i4r4pn"><path fill="currentColor" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></motion.svg>
                <Text letterSpacing={'3px'} pos={'absolute'} mt='155px' mr={'240px'}>{drag}</Text>
                {/* <ArrowUpIcon rotate={'45deg'} /> */}
            </Flex>
        </>
    )
}

export default s404