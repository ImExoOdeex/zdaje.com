import { React, useState, useEffect } from 'react'
import { Box, Button, Flex, Input, Tooltip, chakra, Text, useToast, useColorModeValue, Heading, WrapItem, Wrap, useDisclosure, Collapse, transform } from '@chakra-ui/react'
import PhoneBottom from './PhoneBottom'
import { motion, AnimateSharedLayout } from 'framer-motion';
import { HelpCard, AverageItem } from './UtilItems';
import { useCookies } from 'react-cookie';
import { AdsUpBox } from './ads/AdsBoxes';
import { ChevronDownIcon } from '@chakra-ui/icons';

// only card for grades // not nesesarly for weights problem
function GradesCard(props) {
    const wrapW = ['100%', 'calc(50% - 20px)', 'calc(50% - 48px)', 'calc(50% - 48px)', 'calc(33.333% - 48px)'];
    const key = props.cardKey || 0;
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const toast = useToast();

    function handleSubmit(event) {
        event.preventDefault();
        const field = event.target.children[0].children[0];
        const value = field.value;
        field.value = "";
        field.focus();

        if (!value) {
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
        props.onSubmit(Number(value));
    }
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
    const borderColor = useColorModeValue('rgba(255,255,255, 0.1)', 'rgba(0,0,0, 0.1)');
    const grades = [
        1, 2, 3, 4, 5, 6
    ]
    var grade = grades[Math.floor(Math.random() * grades.length)];
    return (
        <WrapItem WrapItem display={'block'} w={wrapW} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
            justifyContent={'space-between'} alignItems='end'>
            <Heading mb={2} as={motion.h3} layout textShadow={'sm'}>{props.heading}</Heading>
            <Flex as={motion.div} minH='37.5px'><Text fontSize={'25px'} as={motion.p}>
                {props.grades.map((item) => {
                    return (
                        <>
                            <Tooltip key={item.key} hasArrow label={"usuń: " + item.grade}>
                                <Box borderTop='2px solid' borderColor={colors.at(item.grade)} as={motion.span} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.1 } }}
                                    whileHover={{ opacity: 0.8 }} whileTap={() => props.onDelete(item.key)} cursor='pointer'>
                                    {item.grade}
                                </Box>
                            </Tooltip>
                            <chakra.span as={motion.span} _last={{ display: 'none' }}>{", "} </chakra.span>
                        </>
                    )
                }
                )}
            </Text></Flex>
            <Text as={motion.p} layout mt={0}>Podaj swoje oceny:</Text>
            <form onSubmit={handleSubmit} noValidate>
                <Flex as={motion.div} layout>
                    <Input _focus={{ borderRadius: 'md', border: '2px solid', borderColor: 'pink.300' }}
                        border={0} borderBottom='1px' rounded={'none'} borderColor={borderColor}
                        as={motion.input} layout type="number" placeholder={grade} id={"grades" + key} />
                    <Button as={motion.button} layout whileTap={{ scale: 0.8, bg: 'transparent' }}
                        _hover='none' ml={'2'} type="submit" bg={'transparent'} fontWeight='normal'>Dodaj</Button>
                </Flex>
            </form>

        </WrapItem >
    );
}

function useSavedWeights() {
    const cookieName = 'weights';
    const [weights, setWeights] = useState();
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


function Wazona() {
    const wrapW = ['100%', 'calc(50% - 20px)', 'calc(50% - 48px)', 'calc(50% - 48px)', 'calc(33.333% - 48px)'];
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');
    const toast = useToast()

    const [grades, setGrades] = useState({});
    const [gradeKey, setGradeKey] = useState(0);
    const [weights, setWeights] = useSavedWeights();
    const [average, setAverage] = useState();

    const [isWeightsVisible, setIsWeightsVisible] = useState(true);


    useEffect(() => {
        if (!weights) return;
        let newGrades = {};
        weights.forEach((weight) => newGrades[weight] = [])
        setGrades(newGrades);
    }, [weights]);

    useEffect(() => {
        setVisible(average ? true : false);
        setIsWeightsVisible(!weights ? false : true);
    })

    useEffect(() => {
        let numerator = 0;
        let denominator = 0;
        for (let i = 0; i < Object.keys(grades).length; i++) {
            const weight = weights[i];
            const weightGrades = grades[weight];
            const sum = weightGrades.reduce((acc, item) => acc + item.grade, 0);
            numerator += sum * weight;
            denominator += weightGrades.length * weight;
        }
        setAverage(numerator / denominator);

    }, [grades, weights]);

    function handleGradeAdd(weight, grade) {
        let newGrades = {};
        Object.assign(newGrades, grades);
        newGrades[weight] = newGrades[weight].concat([{ key: gradeKey, grade }]);
        setGradeKey(gradeKey + 1);
        setGrades(newGrades);
    }

    function handleGradeDelete(weight, key) {
        let newGrades = {};
        Object.assign(newGrades, grades);
        newGrades[weight] = newGrades[weight].filter((item) => item.key !== key);
        setGrades(newGrades);
    }

    function handleGradesReset() {
        let newGrades = {};
        weights.forEach((weight) => newGrades[weight] = [])
        setGrades(newGrades);
        setAverage(null);
    }
    function handleWeightsSubmit(event) {
        event.preventDefault();
        const input = event.target.children[0].children[0];
        const value = input.value;
        input.value = '';
        let weights = value.split(',');
        weights = weights.map((weight) => weight.trim());
        weights = weights.filter((weight) => weight && !isNaN(weight));
        weights = weights.map((weight) => Number(weight));

        if (weights.length === 0) {
            toast({
                position: 'top',
                variant: 'solid',
                title: 'Błąd',
                description: "Podaj poprawne wagi",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return;
        }
        setWeights(weights);
    }
    const [isVisible, setVisible] = useState(false);
    const averageColor = average >= 1.75 ? 'green.500' : 'red.500';
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Flex w='100%' mx={'auto'} px='5' h='auto' flexDir={'column'} mb={20}>
                <AdsUpBox>
                </AdsUpBox>
                <Wrap spacing={[5, 5, 12]} as={motion.div} >
                    <HelpCard>
                        {!isWeightsVisible ? (

                            <Flex mt={5} display={'block'} w={'100%'} as={motion.div} layout rounded='md'
                                justifyContent={'space-between'} alignItems='end'>
                                <Text>Podaj swoje wagi, które masz w szkole. Każda szkoła ma inne. Wpisz je po pojedynczo, a każdą oddziel przecinkiem.</Text>
                                <form onSubmit={handleWeightsSubmit} noValidate>
                                    <Flex mt={5} flexDir={'row'}>
                                        <Input w={['100%', '75%', '30%']} type="text" name="weights" placeholder="1, 2, 3..." autoComplete="off" />
                                        <Button type="submit" ml={5} fontWeight='normal' rounded={'md'} bg='transparent' _hover={{ bg: 'rgba(246, 135, 179,0.75)' }}>Zatwierdź</Button>
                                    </Flex>
                                </form>
                            </Flex>
                        ) : (
                            <>
                                <Button as={motion.button} _hover={{ bg: 'rgba(129, 230, 217, 0.1)' }} fontSize={'lg'} onClick={onToggle} color={tealColor} fontWeight='normal' bg={'transparent'}>Zmień wagi
                                    {/* TODO: repair rotate in this icon */}
                                    <ChevronDownIcon ml={1} rotate={isOpen ? 270 : 0} transitionProperty={'transform'} transitionDuration={'.2s'} transition="ease-in-out" transform='auto' />
                                </Button>
                                <Collapse in={isOpen} animateOpacity>
                                    <Box as={motion.div} layout>
                                        <form onSubmit={handleWeightsSubmit} noValidate>
                                            <Flex mt={5} flexDir={'row'} as={motion.div} layout>
                                                <Input w={['100%', '75%', '30%']} type="text" name="weights" placeholder="1, 2, 3..." autoComplete="off" />
                                                <Button type="submit" ml={5} fontWeight='normal' rounded={'md'} bg='transparent' _hover={{ bg: 'rgba(246, 135, 179,0.75)' }}>Zatwierdź</Button>
                                            </Flex>
                                        </form>
                                    </Box>
                                </Collapse>
                            </>
                        )}
                    </HelpCard>
                    <AnimateSharedLayout>

                        {Object.keys(grades).map((weight) =>
                            <GradesCard
                                key={weight}
                                cardKey={weight}
                                heading={`Waga ${weight}`}
                                grades={grades[weight]}
                                onSubmit={(grade) => handleGradeAdd(weight, grade)}
                                onDelete={(key) => handleGradeDelete(weight, key)}
                            />
                        )}

                        <AverageItem isVisible={isVisible} average={average} wrapW={wrapW} bg={bg} tealColor={tealColor} handleGradesReset={handleGradesReset} averageColor={averageColor} />
                    </AnimateSharedLayout>
                </Wrap>
            </Flex>
            <PhoneBottom srednia={average ? average.toFixed(2) : "???"} gradesLenght={grades.length} />
        </>
    )
}

export default Wazona