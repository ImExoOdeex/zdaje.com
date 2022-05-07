import { Flex, Heading, ListItem, Text, UnorderedList, useColorModeValue, chakra, Button, useColorMode, Divider, Image, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import Link from '../Link'
import { motion, isValidMotionProp, useMotionValue } from 'framer-motion'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Li({ children, href, ...props }) {
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    return (
        <ListItem p='2' rounded={'md'} _hover={{ bg: 'rgba(102, 237, 255, 0.1)' }} transition='0.1s'>
            <Link href={href} _hover={{ borderBottom: '2px solid', borderColor: '#ff63c3' }} color={tealColor} {...props}>{children}</Link></ListItem>
    )
}

function Footer() {
    const MotionButton = motion(chakra.button, {
        shouldForwardProp: isValidMotionProp,
    });
    const { colorMode, toggleColorMode } = useColorMode();
    const pathLength = useMotionValue(0)
    const divider = useColorModeValue('blackAlpha.800', 'whiteAlpha.600')
    const button = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
    const gitBg = useColorModeValue('#9494e0', '#6e5494')

    return (
        // if u want footer to be layouted set layout={true}
        <Flex as={motion.footer} layout={false} w='100%' h={'auto'} minH='200px' mt='auto'>
            <Flex m={'auto'} w={'1000px'}>
                <SimpleGrid w={'100%'} h={'100%'} minChildWidth='200px' spacingX='40px' mb={{ base: '70px', sm: '0px' }} >
                    <Box w={{ base: '', sm: '100%' }} m={{ base: 4, md: 8 }} flexDir='column'>
                        <Heading fontSize='30px' as={'h3'}>Zdaje.com</Heading>
                        <Text py={2} fontSize='14px'>Oblicz swoją szkolną średnią za
                            pomocą kalkulatora <Link target='_blank' _hover={{ borderBottom: '1px solid' }} href={'https://pl.wikipedia.org/wiki/Otwarte_oprogramowanie'}>Open Source</Link></Text>
                        <Text fontSize={'14px'} borderBottom='2px solid' borderWidth={'90%'} borderColor={'pink.300'}>&copy; Zdaje.com</Text>
                    </Box>

                    <Box>
                        <Flex marginInlineStart={0} style={{ WebkitMarginStart: 0 }} mx={{ base: 4, md: 8 }} my={{ base: 0, md: 8 }} flexDir='row' justifyContent={'space-between'}>
                            <Flex>
                                <UnorderedList listStyleType={'none'} fontFamily="Baloo" spacing={{ base: '2px', md: '10px' }}>
                                    <ListItem ml={2} fontWeight={'bold'}>Legal</ListItem>
                                    <Li href="regulamin">Polityka prywatności</Li>
                                    <Li href="regulamin">Regulamin i warunki</Li>
                                </UnorderedList>
                            </Flex>
                            <Flex display={{ base: 'none', md: 'flex' }}>
                                <Divider orientation='vertical' w={'1px'} bg={divider} />
                            </Flex>
                        </Flex>
                    </Box>

                    <Box display='block'>
                        <Flex m={{ base: 4, md: 8 }} flexDir='column'>
                            <MotionButton h='auto' whileTap={{ opacity: 0, border: '0px', transition: { duration: 1 } }}
                                boxShadow={'md'} p='2' px='3' rounded='md' bg={button}
                                _hover={{ bg: colorMode === 'dark' ? 'purple.500' : 'orange.200' }}
                                data-splitbee-event="theme" onClick={toggleColorMode} aria-label="Justify">

                                {colorMode === 'dark' ?
                                    <MoonIcon mb={'2px'} />
                                    :
                                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"></circle><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M12 1v2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M12 21v2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M4.22 4.22l1.42 1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M18.36 18.36l1.42 1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M1 12h2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M21 12h2"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M4.22 19.78l1.42-1.42"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ pathLength: pathLength }} d="M18.36 5.64l1.42-1.42"></motion.path></g></svg>
                                }<chakra.span alignItems="center"> Zmień motyw
                                </chakra.span></MotionButton>
                            <Link href={'https://github.com/ImExoOdeex/zdaje.com'} _hover={'none'} w='100%' mt={4}>
                                <Button transition={'0s'} _hover={{ bg: gitBg }}
                                    fontWeight={'light'} boxShadow={'md'} bg={button} w='100%'>
                                    {colorMode === 'dark' ? (
                                        <svg fill='white' style={{ marginRight: '7px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    ) : (
                                        <svg style={{ marginRight: '7px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    )}
                                    Github
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex >

    )
}

export default Footer