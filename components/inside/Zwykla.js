import { Box, Button, Flex, FormControl, Input, Tooltip, chakra, Text, SimpleGrid, FormLabel, useColorModeValue, Heading, Grid, GridItem } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import PhoneBottom from './PhoneBottom'
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import HelpCard from './HelpCard';

function Zwykla() {

    const [grades, setGrades] = useState([]);
    const [average, setAverage] = useState(0);
    const [newGrade, setNewGrade] = useState();

    function addGrade(e) {
        e.preventDefault();
        setNewGrade("");
        if (newGrade != '') {
            setGrades((grades) => [...grades, { id: uuidv4(), value: newGrade }]);
        }
        // const field = e.target.children[0].children[0];
        // field.focus();
    };

    const deleteGrade = (index) => {
        setGrades((grades) => grades.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const sum = grades.map(({ value }) => value).reduce((a, b) => +a + +b, 0)
        setAverage(sum / grades.length);

        setVisible(grades.length >= 1 ? true : false);

    }, [grades]);

    function reset() {
        setGrades([]);
        setAverage(0);
        setNewGrade();
    }

    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const [isVisible, setVisible] = useState(false);

    function Char({ children }) {
        return (
            <chakra.span letterSpacing={'10px'}>{children}</chakra.span>
        )
    }

    return (
        <>
            <Flex w='100%' m='auto' px='5' h='auto' flexDir={'column'}>

                <Grid as={motion.div} layout templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(2, 1fr)'
                    gap={[5, 5, 12]} display={['flex', 'flex', 'grid']} flexDir='column'>
                    <AnimateSharedLayout>
                        <HelpCard>
                            <Heading letterSpacing={'1px'} fontSize={[17, 20, 25]}>Jak dodać ocenę z <Char> '+'</Char> lub <Char>'-'</Char> ?</Heading>
                            <Text m={[0.5, 1, 2]}>3+ to jest 3.50, a 3- to 2.75. Czyli dwa z plusem to 2.50, a z minusem 1.75</Text>
                        </HelpCard>
                        <GridItem as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                            justifyContent={'space-around'} alignItems='center'>

                            <Text as={motion.p} layout fontSize={'13px'}>Tutaj wyświetlą się twoje oceny: </Text>
                            <Text as={motion.p} layout fontSize={'12px'}>Kliknij na ocenę, aby ją usunąć</Text>
                            <Flex as={motion.div} layout minH={'40px'}><Text fontSize={'25px'} as={motion.p} >

                                {grades.map((g, i) => {
                                    return (
                                        <>
                                            <Tooltip as={motion.div} key={g.id} hasArrow label={"usuń: " + g.value}>
                                                <Box as={motion.span} whileHover={{ opacity: 0.8 }} whileTap={() => deleteGrade(i)} cursor='pointer'>
                                                    {g.value}
                                                </Box>
                                            </Tooltip>
                                            <chakra.span as={motion.span} _last={{ display: 'none' }}>{", "} </chakra.span>
                                        </>
                                    );
                                })}

                            </Text></Flex>

                            <form noValidate onSubmit={addGrade}>
                                <Box h={'100%'} rounded='sm' w='4px' bg={'teal.200'}></Box>
                                <Flex as={motion.div} layout flexDir={'column'}>
                                    <FormLabel for='ocena' fontSize={'12px'} mb='0'>Dodaj ocenę: </FormLabel>
                                    <Flex flexDir={'row'}>
                                        <Input
                                            autoComplete='off'
                                            autoFocus={false}
                                            placeholder='6'
                                            type={'number'}
                                            w={'40%'}
                                            id='ocena'
                                            value={newGrade}
                                            onChange={(e) => {
                                                setNewGrade(e.target.value);
                                            }}
                                        />
                                        <Button as={motion.button} whileTap={{ scale: 0.6 }} _focus="none" whileHover={{ x: 10, transition: { duration: 0.075 } }} _hover='none' ml={'2'} type="submit" bg={'transparent'} fontWeight='normal'>Dodaj</Button>
                                    </Flex>
                                </Flex>
                            </form>
                        </GridItem>
                        <GridItem as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                            justifyContent={'space-around'} alignItems='center'>
                            <Text as={motion.p} layout fontSize={'13px'}>Średnia Twoich ocen: </Text>
                            <Heading as={motion.h2} layout textAlign={'center'} ><chakra.span transition={'0.5s'} as={'output'} fontSize='72px'
                                color={average === "???" ? 'blue.500' : null || average >= 1.75 ? 'green.500' : 'red.500'}>
                                {average ? average.toFixed(2) : "???"}</chakra.span></Heading>

                            <AnimatePresence exitBeforeEnter>
                                {isVisible && (
                                    <Flex as={motion.div} layout m='auto' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                        <Button w='75%' mx={'auto'} _focus={'none'} onClick={reset} bg='transparent' fontWeight={'normal'} _hover={{ bg: 'rgba(252, 129, 129,0.15)' }}>
                                            <Text color={'red.400'}>Resetuj</Text></Button>
                                    </Flex>
                                )}
                            </AnimatePresence>
                        </GridItem>
                    </AnimateSharedLayout>
                </Grid>
            </Flex>
            <PhoneBottom srednia={average ? average.toFixed(2) : "???"} />
        </>
    )
}

export default Zwykla