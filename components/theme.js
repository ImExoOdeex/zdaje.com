import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            minH: '100vh',
            bg: mode('#ffff', 'gray.900')(props),
        },
        html: {
            h: '100vh',
        },
        h1: {
            fontSize: ["30px !important", "32px !important", "35px !important"],
        },
        h2: {
            fontSize: ["25px !important", "27px !important", "30px !important"],
        },
        h3: {
            fontSize: ["20px !important", "23px !important", "25px !important"],
        },
        p: {
            fontSize: ['14px', '15px', '16px'],
        },
        button: {
            fontWeight: 'normal',
        },
    })
}

const config = {
    initialColorMode: 'white',
    useSystemColorMode: true,
}

const fonts = {
    heading: 'Baloo',
    body: 'Nunito',
}


const theme = extendTheme({
    styles,
    config,
    fonts,
    components: {
        Link: {
            variants: {
                'link': {
                    _hover: { borderBottom: '1px solid', textDecoration: 'none' }
                },
            }
        },
    }
})

export default theme