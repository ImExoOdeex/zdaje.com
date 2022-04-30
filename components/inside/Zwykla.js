import { Box, Button, Flex, FormControl, Input, Tooltip, chakra, Text, useToast, FormLabel, useColorModeValue, Heading, Grid, GridItem, Wrap, WrapItem } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import PhoneBottom from './PhoneBottom'
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { HelpCard, AverageItem } from './UtilItems';
import { AdsUpBox } from './ads/AdsBoxes';

function Zwykla() {

    const [grades, setGrades] = useState([]);
    const [average, setAverage] = useState(0);
    const [newGrade, setNewGrade] = useState();

    const toast = useToast()

    function addGrade(e) {
        e.preventDefault();

        if (!newGrade) {
            toast({
                position: 'top',
                variant: 'solid',
                title: 'Błąd',
                description: "Podaj poprawną ocenę",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
            return;
        }
        setGrades((grades) => [...grades, { id: uuidv4(), value: newGrade }]);
        setNewGrade("");
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
            <chakra.span borderBottom={'2px solid'} borderRadius='1.5' borderColor='pink.500' letterSpacing={'0px'}>{children}</chakra.span>
        )
    }

    const wrapW = ['100%', 'calc(50% - 20px)', 'calc(50% - 48px)'];

    const averageColor = average >= 1.75 ? 'green.500' : 'red.500';
    const borderColor = useColorModeValue('rgba(255,255,255, 0.1)', 'rgba(0,0,0, 0.1)');
    const colors = [
        'gray.500',
        'red.500',
        'orange.500',
        'yellow.500',
        'teal.500',
        'green.500',
        'pink.500',
        'purple.500',
        'purple.900',
    ]
    return (
        <>
            <Flex w='100%' mx={'auto'} px='5' h='auto' flexDir={'column'}>
                <AdsUpBox />

                <Wrap spacing={[5, 5, 12]} as={motion.div}>
                    <AnimateSharedLayout>
                        <HelpCard>
                            <Heading as={motion.h2} fontSize={[17, 20, 25]} layout>Średnia arytmetyczna (zwykła)</Heading>
                            <Text m={[0.5, 1, 2]}>Każda ocena ma taką samą wartość.</Text>
                        </HelpCard>
                        <WrapItem display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                            justifyContent={'space-around'} alignItems='center' flexDir={'column'}>

                            <Text as={motion.p} layout fontSize={'13px'}>Tutaj wyświetlą się twoje oceny: </Text>
                            <Text as={motion.p} layout fontSize={'12px'}>Kliknij na ocenę, aby ją usunąć</Text>
                            <Flex as={motion.div} minH={'40px'} mt={2}><Text fontSize={'25px'} as={motion.p}>

                                {grades.map((g, i) => {
                                    return (
                                        <>
                                            <Tooltip key={g.id} hasArrow label={"usuń: " + g.value}>
                                                <Box borderTop={'2px solid'} borderColor={colors.at(g.value)} as={motion.span} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.1 } }}
                                                    whileHover={{ opacity: 0.8 }} whileTap={() => deleteGrade(i)} cursor='pointer'>
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
                                            _focus={{ borderRadius: 'md', border: '2px solid', borderColor: 'pink.300' }}
                                            border={0} borderBottom='1px' rounded={'none'} borderColor={borderColor}
                                            as={motion.input} layout
                                            autoComplete='off'
                                            autoFocus={false}
                                            placeholder='6'
                                            type={'number'}
                                            w={['100%', '75%', '40%']}
                                            id='ocena'
                                            value={newGrade}
                                            onChange={(e) => {
                                                setNewGrade(e.target.value);
                                            }}
                                        />
                                        <Button as={motion.button} whileTap={{ scale: 0.8, bg: 'transparent' }}
                                            _hover='none' ml={'2'} type="submit" bg={'transparent'} fontWeight='normal'>Dodaj</Button>
                                    </Flex>
                                </Flex>
                            </form>
                        </WrapItem>
                        <AverageItem isVisible={isVisible} average={average} wrapW={wrapW} bg={bg} tealColor={tealColor} handleGradesReset={reset} averageColor={averageColor} />
                    </AnimateSharedLayout>
                </Wrap>
            </Flex>
            <PhoneBottom average={average ? average.toFixed(2) : "???"} gradesLenght={grades.length} />
        </>
    )
}

export default Zwykla