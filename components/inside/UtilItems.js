import { React } from 'react'
import { WrapItem, Button, Flex, chakra, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

export function AverageItem({ isVisible, average, wrapW, bg, tealColor, handleGradesReset, averageColor }) {
    return (
        <WrapItem display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
            justifyContent={'space-between'} alignItems='end'>
            <Text as={motion.p} layout fontSize={'13px'}>Średnia Twoich ocen: </Text>
            <Heading as={motion.h2} layout textAlign={'center'} ><chakra.span transition={'0.5s'} as={'output'} fontSize='72px'
                color={!average ? tealColor : averageColor}>
                {average ? average.toFixed(2) : "???"}</chakra.span></Heading>

            <AnimatePresence>
                {isVisible && (
                    <Flex as={motion.div} layout m='auto' exit={{ opacity: 0, y: 5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }} mt='auto'>
                        <Button w='75%' mx={'auto'} onClick={handleGradesReset} bg='transparent' fontWeight={'normal'} _hover={{ bg: 'rgba(252, 129, 129,0.15)' }}>
                            <Text color={'red.400'}>Resetuj</Text></Button>
                    </Flex>
                )}
            </AnimatePresence>
        </WrapItem>
    )
}

export function HelpCard({ children, ...props }) {
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    function Char({ children }) {
        return (
            <chakra.span letterSpacing={'0px'}>{children}</chakra.span>
        )
    }
    return (
        <WrapItem as={motion.div} layout w='100%' display={'block'} boxShadow={'md'} bg={bg} p={5} rounded='md' justifyContent={'space-around'} alignItems='center' {...props}>
            <Heading as={motion.h2} layout letterSpacing={'1px'} fontSize={[17, 20, 25]}>Jak dodać ocenę z <Char> ' + '</Char> lub <Char>' - '</Char> ?</Heading>
            <Text as={motion.p} layout m={[0.5, 1, 2]}>Jeśli twoja ocena cząstkowa posiada minusa to odejmi od niej 0.25, a jeślij posiada plusa to
                dodaj do niej 0.5. Na przykład ocena 3+ to 3.50, a 3- to 2.75. W twojej szkole może być to inaczej, ale w więkoszości jest tak jak powyżej.</Text>
            {children}
        </WrapItem>
    )
}
