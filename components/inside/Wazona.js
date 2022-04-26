import { React, useState, useEffect } from 'react'
import { Box, Button, Flex, Input, Tooltip, chakra, Text, useToast, FormLabel, useColorModeValue, Heading, WrapItem, Wrap, IconButton, UnorderedList } from '@chakra-ui/react'
import PhoneBottom from './PhoneBottom'
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import HelpCard from './HelpCard';
import { useCookies } from 'react-cookie';
import { SmallCloseIcon } from '@chakra-ui/icons';

function GradesCard(props) {
    const wrapW = ['100%', 'calc(50% - 20px)', 'calc(50% - 48px)', 'calc(50% - 48px)', 'calc(33.333% - 48px)'];
    const key = props.cardKey || 0;
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');

    function handleSubmit(event) {
        event.preventDefault();
        const field = event.target.children[0].children[0];
        const value = field.value;
        field.value = "";
        field.focus();

        if (!value) {
            alert("Nie wpisałeś oceny");
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
                    <Input as={motion.input} layout type="number" placeholder="5" id={"grades" + key} className="grades__input text-field__input" />
                    <Button as={motion.button} layout whileTap={{ scale: 0.8, bg: 'transparent' }} _focus="none"
                        _hover='none' ml={'2'} type="submit" bg={'transparent'} fontWeight='normal'>Dodaj</Button>
                </Flex>
            </form>

        </WrapItem >
    );
}

function WeightsCard(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const input = event.target.children[0].children[0];
        const value = input.value;
        input.value = '';
        let weights = value.split(',');
        weights = weights.map((weight) => weight.trim());
        weights = weights.filter((weight) => weight && !isNaN(weight));
        weights = weights.map((weight) => Number(weight));

        if (weights.length === 0) {
            alert("Nie wpisałeś wag");
            return;
        }
        props.onSubmit(weights);
    }
    const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
    const tealColor = useColorModeValue('teal.600', 'teal.200');

    return (
        <WrapItem display={'block'} w={'100%'} as={motion.div} layout boxShadow={'md'} bg={bg} p={5} rounded='md' border={'0px solid'} borderColor={tealColor}
            justifyContent={'space-between'} alignItems='end'>
            <Text>Zanim będziesz mógł obliczyć swoją średnią musisz podać nam wagi ocen używane w&nbsp;twojej szkole. Wypisz je po przecinku pamiętając, że ułamki dziesiętne (np. 0.6) zapisuje się za pomocą kropki. Po pierwszym razie kalkulator zapamięta wagi na danym urządzeniu.</Text>
            <form onSubmit={handleSubmit} noValidate>
                <Flex mt={5} flexDir={'row'}>
                    <Input w={['100%', '75%', '30%']} type="text" name="weights" placeholder="1, 2, 3..." autoComplete="off" />
                    <Button type="submit" ml={5} fontWeight='normal' rounded={'md'} bg='transparent' _hover={{ bg: 'rgba(246, 135, 179,0.75)' }}>Zatwierdź</Button>
                </Flex>
            </form>
        </WrapItem>
    );
}

function useSavedWeights() {
    const cookieName = 'avgCalcData';
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

    function handleWeightsSubmit(weights) {
        setWeights(weights);
    }

    useEffect(() => {
        if (!weights) return;
        let newGrades = {};
        weights.forEach((weight) => newGrades[weight] = [])
        setGrades(newGrades);
    }, [weights]);

    useEffect(() => {
        setVisible(average ? true : false);
        console.log(average)
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

    function isAverage() {
        return average || average === 0;
    }

    const [isVisible, setVisible] = useState(false);

    function Char({ children }) {
        return (
            <chakra.span letterSpacing={'0px'}>{children}</chakra.span>
        )
    }
    const averageColor = average >= 1.75 ? 'green.500' : 'red.500';
    return (
        <>
            <Flex w='100%' mx={'auto'} mt={['20px', '20px', '150px']} px='5' h='auto' flexDir={'column'}>
                <Wrap spacing={[5, 5, 12]} as={motion.div} >
                    <AnimateSharedLayout>
                        <HelpCard>
                            <Heading as={motion.h2} layout letterSpacing={'1px'} fontSize={[17, 20, 25]}>Jak dodać ocenę z <Char> ' + '</Char> lub <Char>' - '</Char> ?</Heading>
                            <Text as={motion.p} layout m={[0.5, 1, 2]}>3+ to jest 3.50, a 3- to 2.75. Czyli dwa z plusem to 2.50, a z minusem 1.75</Text>
                        </HelpCard>

                        <WeightsCard onSubmit={handleWeightsSubmit} />

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
                                        <Button w='75%' mx={'auto'} _focus={'none'} onClick={handleGradesReset} bg='transparent' fontWeight={'normal'} _hover={{ bg: 'rgba(252, 129, 129,0.15)' }}>
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