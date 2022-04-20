import { React, useState, useEffect } from 'react'
import { Box, Button, Flex, Input, Tooltip, chakra, Text, useToast, FormLabel, useColorModeValue, Heading, WrapItem, Wrap, IconButton } from '@chakra-ui/react'
import PhoneBottom from './PhoneBottom'
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import HelpCard from './HelpCard';
import { useCookies } from 'react-cookie';
import { SmallCloseIcon } from '@chakra-ui/icons';

function Wazona() {
    const [grades, setGrades] = useState([]);
    const [average, setAverage] = useState(0);
    const [newGrade, setNewGrade] = useState();
    const [weights, setWeights] = useState([{ id: uuidv4(), value: 1 }]);

    const toast = useToast()

    function addGrade(e) {
        e.preventDefault();
        if (!newGrade) {
            toast({
                position: 'top',
                variant: 'subtle',
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

    const deleteWeight = (index) => {
        setWeights((weights) => weights.filter((_, i) => i !== index));
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


    function useSavedWeights() {
        const cookieName = 'avgCalcData';
        const [cookies, setCookie] = useCookies([cookieName]);

        useEffect(() => {
            if (cookieName in cookies) {
                setWeights(cookies[cookieName].split(',').map((weight) => Number(weight)));
            }
        }, [cookies]);

        function setNewWeights(newWeigths) {
            if (newWeigths) {
                setCookie(cookieName, newWeigths.join(','));
            }
            setWeights(newWeigths);
        }

        return [weights, setNewWeights];
    }

    // ComponentDidMount(() => {
    //     const [weights, setNewWeights] = useSavedWeights();
    //     setWeights(weights);
    // })

    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const [isVisible, setVisible] = useState(false);

    function Char({ children }) {
        return (
            <chakra.span letterSpacing={'0px'}>{children}</chakra.span>
        )
    }
    const averageColor = average >= 1.75 ? 'green.500' : 'red.500';
    const wrapW = ['100%', '100%', 'calc(50% - 48px)'];
    return (
        <>
            <Flex w='100%' mx={'auto'} mt={['20px', '20px', '150px']} px='5' h='auto' flexDir={'column'}>

                <Wrap spacing={[5, 5, 12]} as={motion.div} display={['flex', 'flex', 'grid']} >
                    <AnimateSharedLayout>
                        <HelpCard as={motion.div} layout>
                            <Heading as={motion.h2} layout letterSpacing={'1px'} fontSize={[17, 20, 25]}>Jak dodać ocenę z <Char> ' + '</Char> lub <Char>' - '</Char> ?</Heading>
                            <Text as={motion.p} layout m={[0.5, 1, 2]}>3+ to jest 3.50, a 3- to 2.75. Czyli dwa z plusem to 2.50, a z minusem 1.75</Text>
                        </HelpCard>
                        {/* <WrapItem display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                            justifyContent={'space-around'} alignItems='center' flexDir={'column'}>

                            <Text as={motion.p} layout fontSize={'13px'}>Tutaj wyświetlą się twoje oceny: </Text>
                            <Text as={motion.p} layout fontSize={'12px'}>Kliknij na ocenę, aby ją usunąć</Text>
                            <Flex as={motion.div} minH={'40px'}><Text fontSize={'25px'} as={motion.p}>

                            </Text></Flex>

                        </WrapItem> */}

                        {weights.map((w, i) => {
                            return (
                                <WrapItem key={w.id} display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                                    justifyContent={'space-around'} alignItems='center' flexDir={'column'}>
                                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                                        <Heading as={'h2'}>{w}</Heading>
                                        <IconButton bg={'transparent'} icon={<SmallCloseIcon />} onClick={deleteWeight}></IconButton>
                                    </Flex>
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
                                                    w={['100%', '75%', '40%']}
                                                    id='ocena'
                                                    value={newGrade}
                                                    onChange={(e) => {
                                                        setNewGrade(e.target.value);
                                                    }}
                                                />
                                                <Button as={motion.button} whileTap={{ scale: 0.8, bg: 'transparent' }} _focus="none"
                                                    _hover='none' ml={'2'} type="submit" bg={'transparent'} fontWeight='normal'>Dodaj</Button>
                                            </Flex>
                                        </Flex>
                                    </form>
                                </WrapItem>
                            )
                        })}
                        <WrapItem display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
                            justifyContent={'space-between'} alignItems='end'>
                            <Text as={motion.p} layout fontSize={'13px'}>Średnia Twoich ocen: </Text>
                            <Heading as={motion.h2} layout textAlign={'center'} ><chakra.span transition={'0.5s'} as={'output'} fontSize='72px'
                                color={grades.length == 0 ? tealColor : averageColor}>
                                {average ? average.toFixed(2) : "???"}</chakra.span></Heading>
                            {grades.map((g, i) => {
                                return (
                                    <>
                                        <Tooltip key={g.id} hasArrow label={"usuń: " + g.value}>
                                            <Box as={motion.span} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.1 } }}
                                                whileHover={{ opacity: 0.8 }} whileTap={() => deleteGrade(i)} cursor='pointer'>
                                                {g.value}
                                            </Box>
                                        </Tooltip>
                                        <chakra.span as={motion.span} _last={{ display: 'none' }}>{", "} </chakra.span>
                                    </>
                                );
                            })}

                            <AnimatePresence exitBeforeEnter>
                                {isVisible && (
                                    <Flex as={motion.div} layout m='auto' exit={{ opacity: 0, y: 5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }} mt='auto'>
                                        <Button w='75%' mx={'auto'} _focus={'none'} onClick={reset} bg='transparent' fontWeight={'normal'} _hover={{ bg: 'rgba(252, 129, 129,0.15)' }}>
                                            <Text color={'red.400'}>Resetuj</Text></Button>
                                    </Flex>
                                )}
                            </AnimatePresence>
                        </WrapItem>
                    </AnimateSharedLayout>
                </Wrap>
            </Flex>
            <PhoneBottom srednia={average ? average.toFixed(2) : "???"} gradesLenght={grades.length} />
        </>
    )
}

export default Wazona