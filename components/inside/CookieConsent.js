import { Flex, useColorModeValue, Text, Button, chakra, Box, Image } from '@chakra-ui/react'
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';
import { React, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Link from '../Link'

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(['cookieConsent']);
    const [isCookieConsent, setIsCookieConsent] = useState(false);

    useEffect(() => {
        if (cookies.cookieConsent) {
            setIsCookieConsent(true);
        }
    }, [cookies.cookieConsent]);
    const setCookieConsent = () => {
        setCookie('cookieConsent', true, { path: '/' });
        setIsCookieConsent(true);
    }

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    const tealColor = useColorModeValue('teal.600', 'teal.200');

    return (
        <AnimatePresence>
            {!isCookieConsent &&
                <ChakraBox
                    initial={!isCookieConsent ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={!isCookieConsent ? { opacity: 1 } : { opacity: 0 }}
                    pos="fixed"
                    bottom="10"
                    left={[0, 0, 10]}
                    zIndex="9999"
                    display={isCookieConsent ? 'none' : 'flex'}>
                    <ChakraBox
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 200 }}
                        transition={{ duration: 0.4, type: 'spring', bounce: '0' }}
                        maxW={'400px'} m='auto' mx={[4, 4, 'auto']} rounded='md' p={7} justifyContent="center" alignItems="center" border='1px solid' borderColor={tealColor}
                        bg={useColorModeValue('#fff', '#171923')} align="center" display={'flex'} flexDir={'column'}>
                        <Flex flexDir={'row'}>
                            <Text fontSize="sm" color={useColorModeValue('gray.900', 'gray.200')}>
                                Używamy ciasteczek, aby zapewnić najlepsze doświadczenie wszystkich użytkowników.
                            </Text>
                            <Image w={'60px'} src="https://ik.imagekit.io/o532f5vcp38/cookie_yzEnFaENZ.svg?updatedAt=1628271705356" alt='cookie' />
                        </Flex>
                        <Button colorScheme={'teal'} mt={5} minW='100px'
                            variantColor="teal"
                            variant="outline"
                            onClick={setCookieConsent}
                            fontWeight='normal'
                            w={'100%'}
                        >
                            OK
                        </Button>
                    </ChakraBox>
                </ChakraBox>
            }
        </AnimatePresence >
    )
}
export default CookieConsent