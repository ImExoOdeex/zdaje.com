import { Flex, Heading, ListItem, UnorderedList, Button, useColorMode, useColorModeValue, chakra, Text, IconButton, color, Image } from '@chakra-ui/react'
import React from 'react'
import Link from '../Link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion, isValidMotionProp, useMotionValue, useTransform } from 'framer-motion'
import { AiOutlineHome } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const MotionButton = motion(chakra.button, {
        shouldForwardProp: isValidMotionProp,
    });
    const pathLength = useMotionValue(0)
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const borderColor = useColorModeValue('black', 'white');
    const router = useRouter()


    return (
        <Flex as={'header'} h={'60px'} bg='transparent' w='100%'>
            <Flex as={'nav'} m={'auto'} w='1300px' bg={'tansparent'} h='100%' justifyContent={'space-between'}>
                <Flex alignItems={'center'} ml={{ base: '20px', md: '40px' }} flexDir='row'><Heading>
                    <Link _hover={{ borderBottom: '2px solid', borderColor: tealColor }} href={'/'} display='inline-flex'>Zdaje <chakra.span letterSpacing={'0px'} color={tealColor}>.com</chakra.span>
                        {/* <Flex ml={1} flexDir={'column'} justifyContent={'center'} textAlign={'left'}>
                            <Text fontWeight={'normal'} fontSize={{ base: '12px', md: '14px' }} color={tealColor} justifyContent={'flex-start'} textAlign={'left'}>Taaak!</Text>
                            <Text fontWeight={'normal'} fontSize={{ base: '12px', md: '14px' }} color={tealColor} justifyContent={'flex-start'} textAlign={'left'}>Zdajesz!</Text>
                        </Flex> */}
                    </Link></Heading></Flex>
                <Flex alignItems={'center'} mr='40px' display={{ base: 'flex', sm: 'none' }}>
                    {/* <IconButton onClick={() => router.back()} fontSize='20px' aria-label='Search database' icon={<ArrowBackIcon />} mr={2} _hover='none' bg='transparent' /> */}
                    <Link href={'/'}>
                        <AiOutlineHome size={'25px'} />
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mr='40px' display={{ base: 'none', sm: 'flex' }}>
                    <UnorderedList listStyleType={'none'} display='inline-flex'>
                        <ListItem mr={'5'}><Link href={'/'} _hover={{ borderBottom: '2px solid' }} borderColor={tealColor}
                            borderBottom={router.pathname == '/' ? "2px solid" : "0px solid"}>Start</Link></ListItem>
                        <ListItem opacity={0.8}>Średnia: </ListItem>
                        <ListItem ml={'20px'}><Link href={'zwykla'} _hover={{ borderBottom: '2px solid' }} borderColor={tealColor}
                            borderBottom={router.pathname == '/zwykla' ? "2px solid" : "0px solid"}>Zwykła</Link></ListItem>
                        <ListItem ml={'20px'}><Link href={'wazona'} _hover={{ borderBottom: '2px solid' }} borderColor={tealColor}
                            borderBottom={router.pathname == '/wazona' ? "2px solid" : "0px solid"}>Ważona</Link></ListItem>
                    </UnorderedList>
                    <Button as={motion.button} whileHover={{ rotate: colorMode === "dark" ? 10 : -10, transition: { duration: 0.05 } }} p='2' px='3' rounded='md' ml={'10px'}
                        _hover={{ bg: colorMode === 'dark' ? 'purple.500' : 'orange.200' }} bg={'transparent'} data-splitbee-event="theme" onClick={toggleColorMode} aria-label="Justify">
                        {colorMode === 'dark' ?
                            <MoonIcon />
                            :
                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><motion.circle initial={{ pathLength: 0 }} animate={{ pathLength: 1, transition: { duration: 3, ease: "easeInOut" } }} style={{ pathLength: pathLength }} cx="12" cy="12" r="5"></motion.circle><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M12 1v2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M12 21v2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M4.22 4.22l1.42 1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M18.36 18.36l1.42 1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M1 12h2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M21 12h2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M4.22 19.78l1.42-1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M18.36 5.64l1.42-1.42"></motion.path></g></svg>
                        }</Button>

                </Flex>
            </Flex>
        </Flex >
    )
}

export default Header;