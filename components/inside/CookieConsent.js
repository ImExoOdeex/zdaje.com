import { Flex, useColorModeValue, Text, Button } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Link from '../Link'

function CookieConsent() {
    const bg = useColorModeValue('#ffff', 'gray.900')
    const tealColor = useColorModeValue('teal.600', 'teal.200');

    const cookiesName = 'cookieConsent'
    const [cookies, setCookies] = useCookies([cookiesName]);
    const [isCookied, setIsCookied] = useState(false);

    useEffect(() => {
        if (cookiesName in cookies) {
            setIsCookied(cookies[cookiesName] === false);
        }

    }, [cookies]);

    return (
        <Flex display={'none'} flexDir={'column'} pos={'fixed'} w='auto' maxW={'550px'} h={'auto'} bg={bg} rounded='md' p={10} bottom={10} left={10} border='2px solid' borderColor={tealColor}>
            <Text>Ta strona używa ciasteczek. Zostając tutaj akceptujesz <Link color={tealColor} href="/regulamin" variant='link'>regulamin.</Link></Text>

            {isCookied && (
                <Button mx={'auto'} pos={'static'} mt='10' w={'75%'} fontWeight='normal' onClick={() => (setCookies('cookieConsent', true))}>OK</Button>
            )}
        </Flex>
    )
}

export default CookieConsent