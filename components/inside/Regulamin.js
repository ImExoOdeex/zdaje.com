import { UnorderedList, Flex, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import React from 'react'
import { AdsUpBox } from './ads/AdsBoxes'
import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/react'

function Regulamin() {
  const router = useRouter();
  const tealColor = useColorModeValue('teal.600', 'teal.200');
  return (
    <>
      <AdsUpBox />
      <Flex w={['100%', '90%', '75%']} mx='auto' px='5' h='auto' flexDir={'column'}>
        <Heading color={router.pathname === "/regulamin#regulamin_i_warunki" ? tealColor : ''}
          id='regulamin_i_warunki' scrollMarginTop={'100px'}>Regulamin i warunki</Heading>
        <Flex flexDir={'column'} ml={[1, 2, 5]} mt={5}>
          <OrderedList>
            <ListItem>Narzędzie nigdy nie przedstawia twojej prawdziwej średniej.</ListItem>
            <ListItem>Nigdy nie sugeruj się tą średnią - szkoły mają różne systemy oceniania.</ListItem>
            <ListItem>To narzędzie pokazuje średnią, którą podał użytkownik.</ListItem>
          </OrderedList>
        </Flex>

        <Heading color={router.pathname === "/regulamin#polityka_prywatnosci" ? tealColor : ''}
          id='polityka_prywatnosci' scrollMarginTop={'100px'} mt={10}>Polityka prywatności</Heading>
        <Flex flexDir={'column'} ml={[1, 2, 5]} mt={5}>
          <OrderedList>
            <ListItem>Strona korzysta z ciasteczek (cookies) - jeśli nie zezwalasz na ich wykorzystanie, natychmiast opuść tę stronę.</ListItem>
            <ListItem>Używamy technologii takich jak Google Analytics i (jeszcze nie) Google AdSense.</ListItem>
            <ListItem>Ciasteczka są używane do statystyk, pokazywania reklam.</ListItem>
            <ListItem>Dane poufne użytkowników odwiedzających naszą stronę NIGDY nie były, nie są i nie będą przekazywane organizacjom trzecim.</ListItem>
          </OrderedList>
        </Flex>
      </Flex>
    </>
  )
}

export default Regulamin