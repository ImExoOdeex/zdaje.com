import React from 'react'
import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion';

function PhoneBottom({ srednia, gradesLenght }) {
    const primary = useColorModeValue("#ffff", "gray.900");
    const initial = {
        y: 70
    }
    const visible = {
        y: 0,
        transition: {
            ease: "easeOut", duration: 0.5
        }
    }
    const averageColor = srednia > 1.74 ? 'green.500' : 'red.500';
    const tealColor = useColorModeValue('teal.600', 'teal.200');


    return (
        <Flex as={motion.div} initial={initial} animate={visible} pos={'fixed'} h='70px' alignItems={'center'} justifyContent='center' display={{ base: 'flex', sm: 'none' }}
            w={'100%'} bg={primary} bottom='0' right='0' left='0' zIndex={'1'}>
            <Text mr={'5'}>Twoja średnia to: </Text>
            <Heading fontSize={'40px !important'} color={gradesLenght == 0 ? tealColor : averageColor}>{srednia}</Heading>
        </Flex>
    )
}

export default PhoneBottom