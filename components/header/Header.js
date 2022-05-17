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
    const pathLength = useMotionValue(0)
    const tealColor = useColorModeValue('#2C7A7B', '#81E6D9');
    const router = useRouter()


    return (
        <Flex as={'header'} h={'60px'}
            w='100%' pos={'sticky'} top='0' backdropFilter={'blur(2px) opacity(.95)'}>
            <Flex as={'nav'} m={'auto'} w='1300px' bg={'tansparent'} h='100%' justifyContent={'space-between'}>
                <Flex alignItems={'center'} ml={{ base: '20px', md: '40px' }} flexDir='row'>
                    <Link href={'/'}>
                        <Heading display='inline-flex'  >
                            <chakra.svg mr={1} width={'28px'} id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 474.65 474.65"><rect width="474.65" height="474.65" rx="154" fill="#191919" /><path d="M260.74,235.22c-47.06,0-85.7-38.51-85.7-85.7a85.7,85.7,0,1,1,171.4,0C346.44,196.71,307.8,235.22,260.74,235.22Zm0-142.7a57.13,57.13,0,1,0,57.13,57.13A57.29,57.29,0,0,0,260.74,92.52Z" transform="translate(-23.35 -18.73)" fill="#1fdcff" /><path d="M417.73,435.06H103.62V375.12A125,125,0,0,1,229.24,249.51H292A125,125,0,0,1,417.6,375.12v59.94ZM132.19,406.5h257V375.12c0-54.2-44.25-97.05-97.05-97.05H229.24c-54.2,0-97.05,44.26-97.05,97.05Z" transform="translate(-23.35 -18.73)" fill="#1fdcff" /></chakra.svg>
                            Zdaje <chakra.span letterSpacing={'0px'} color={tealColor}>.com</chakra.span>
                        </Heading>
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mr='40px' display={{ base: 'flex', sm: 'none' }}>
                    <Link href={'/'}>
                        <AiOutlineHome size={'25px'} />
                    </Link>
                </Flex>
                <Flex alignItems={'center'} mr='40px' display={{ base: 'none', sm: 'flex' }}>
                    <UnorderedList fontWeight={'bold'} listStyleType={'none'} display='inline-flex'>
                        <ListItem ><Link href={'/'} _hover={{ opacity: 0.5 }} borderColor={tealColor}
                            borderBottom={router.pathname == '/' ? "2px dashed" : "0px solid"}>Start</Link></ListItem>
                        <ListItem ml={'20px'}><Link href={'jak_obliczac'} _hover={{ opacity: 0.5 }} borderColor={tealColor}
                            borderBottom={router.pathname == '/jak_obliczac' ? "2px dashed" : "0px solid"}>Jak obliczać?</Link></ListItem>
                        <ListItem ml={'20px'}><Link href={'zwykla'} _hover={{ opacity: 0.5 }} borderColor={tealColor}
                            borderBottom={router.pathname == '/zwykla' ? "2px dashed" : "0px solid"}>Zwykła</Link></ListItem>
                        <ListItem ml={'20px'}><Link href={'wazona'} _hover={{ opacity: 0.5 }} borderColor={tealColor}
                            borderBottom={router.pathname == '/wazona' ? "2px dashed" : "0px solid"}>Ważona</Link></ListItem>
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