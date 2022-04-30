import { SmallAddIcon } from '@chakra-ui/icons';
import { Flex, Heading, Text, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'
import Link from '../Link'
import { motion } from 'framer-motion'
import { AdsUpBox } from './ads/AdsBoxes';

function Li({ children, href, ...props }) {
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    return (
        <Link p='2' href={href} rounded={'md'} transition='0.1s' _hover={{ bg: 'rgba(102, 237, 255, 0.1)' }} color={tealColor} {...props}>
            <ListItem>{children}
            </ListItem></Link>
    )
}

function Start() {
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    return (
        <>
            <AdsUpBox h={['20px', '20px', '100px']} />
            <Flex border={'0px solid'} borderColor='pink.200' boxShadow={'md'} flexDir={'column'} h='auto' m={{ base: 2, md: 10 }} my={0} p={{ base: 2, md: 5 }} py={0} rounded={'md'}>
                <Heading as={'h1'}>Sprawdź czy zdajesz 🤔</Heading>
                <Text p={[0, 0, 5]} py={2}>To narzędzie pozwala na policzenie swojej średniej <Link variant='link' href={'zwykla'}>zwykłej</Link> lub <Link variant='link' href={'wazona'}>ważonej</Link>
                    . Jeślij w twojej szkole twoje oceny mają wagi to jest średnia ważona. W przeciwnym wypadku oblicz swoją średnią arytmetyczną (zwykłą).</Text>
                <Heading>Jaką masz średnią?</Heading>
                <UnorderedList listStyleType={'none'} display='inline-flex' m={'auto'}>
                    <Li mr='4' href={'wazona'}><SmallAddIcon />Ważona</Li>
                    <Li href={'zwykla'}><SmallAddIcon />Arytmetyczna</Li>
                </UnorderedList>
                <Heading mt='5'>Jak obliczyć średnią bez kalkulatora?</Heading>
                <Text>Jeśli chcesz obliczać swoją średnią nie mając dostępu do internetu zapoznaj się z naszym <Link href={'jak'} variant={'link'} color={tealColor}>poradnikiem</Link>.</Text>
            </Flex>
        </>
    )
}

export default Start