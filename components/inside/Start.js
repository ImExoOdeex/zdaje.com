import { SmallAddIcon } from '@chakra-ui/icons';
import { Flex, Heading, Text, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'
import Link from '../Link'
import { motion } from 'framer-motion'

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
        <Flex border={'0px solid'} borderColor='pink.200' boxShadow={'md'} flexDir={'column'} h='auto' m={{ base: 2, md: 10 }} p={{ base: 2, md: 5 }} rounded={'md'}>
            <Heading as={'h1'}>Sprawdź czy zdajesz 🤔</Heading>
            <Text py={2} >Tutaj możesz obliczyć swoją średnią i sprawdzić czy będziesz się stresował poprawką.
                W większości szkół średnia powyżej 1.75 oznacza dobrą drogę, jednak to czy przejdziesz zależy od wyboru nauczyciela.
                Jeśli jesteś w podstawówce zapewne masz średnią arytmetyczną (zwykłą), natomiast jeśli jesteś w szkole średniej to masz
                średnią ważoną. W ważonej każda ocena ma swoją wagę czyli jak dostaniesz ocene niedostateczną z sprawdzianiu np. 2+ to
                twoja prawdziwa ocena to jest <b>2.50</b> * waga podana przez nauczyciela np.: 4 przez ilość ocen czyli 1 razy waga tej oceny, czyli
                <b> 2.50 * 4 / 1 * 4</b>, czyli 10 / 4 to twoja średnia jest 2.50. </Text>
            <Heading>Jaką masz średnią?</Heading>
            <UnorderedList listStyleType={'none'} display='inline-flex' m={'auto'}>
                <Li mr='4' href={'wazona'}><SmallAddIcon /> Ważoną</Li>
                <Li href={'zwykla'}><SmallAddIcon /> Arytmetyczna</Li>
            </UnorderedList>
            <Heading mt='5'>Jak obliczyć średnią bez kalkulatora?</Heading>
            <Text>Jeśli chcesz obliczać swoją średnią nie mając dostępu do internetu zapoznaj się z naszym <Link href={'jak'} color={tealColor}>poradnikiem</Link>.</Text>

        </Flex>
    )
}

export default Start