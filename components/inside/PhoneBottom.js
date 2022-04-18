import React from 'react'
import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion';

function PhoneBottom({ srednia }) {
    const primary = useColorModeValue("#ffff", "#262626");
    const initial = {
        y: 70
    }
    const visible = {
        y: 0,
        transition: {
            ease: "easeOut", duration: 0.5
        }
    }

    const exit = {
        y: 70,
        opacity: 0,
        transition: {
            ease: "easeOut", duration: 0.1
        }
    }

    return (
        <Flex as={motion.div} initial={initial} exit={exit} animate={visible} pos={'fixed'} h='70px' alignItems={'center'} justifyContent='center' display={{ base: 'flex', sm: 'none' }} w={'100%'} bg={primary} bottom='0' right='0' left='0' zIndex={'1'}>
            <Text mr={'5'}>Twoja średnia to: </Text>
            <Heading fontSize={'40px'} color={srednia >= 1.75 ? 'green.500' : 'red.500'}>{srednia}</Heading>
        </Flex>
    )
}

export default PhoneBottom