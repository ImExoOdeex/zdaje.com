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
            color: mode('rgba(0,0,0,0.8)', 'rgba(255,255,255,0.9)')(props),
        },
        h2: {
            fontSize: ["25px !important", "27px !important", "30px !important"],
            color: mode('rgba(0,0,0,0.8)', 'rgba(255,255,255,0.9)')(props),
        },
        h3: {
            fontSize: ["20px !important", "23px !important", "25px !important"],
            color: mode('rgba(0,0,0,0.8)', 'rgba(255,255,255,0.9)')(props),
        },
        p: {
            fontSize: ['14px', '15px', '16px'],
            color: mode('#rgba(0,0,0,0.9)', 'rgba(255,255,255,0.9)')(props),
        },
        button: {
            fontWeight: 'normal',
        },
    })
}

const config = {
    initialColorMode: 'dark',
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