import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            minH: '100vh',
            bg: mode('#ffff', '#262626')(props),
        },
        html: {
            h: '100vh',
        },
        //why it is not working idk but yeah
        "h3": {
            fontSize: '2px',
        },
        "h2": {
            fontSize: '2px',
        },
        "h1": {
            fontSize: '5px',
        },
        p: {
            fontSize: ['14px', '15px', '16px'],
        },
        button: {
            fontWeight: 'normal',
        }
    })
}

const config = {
    initialColorMode: 'white',
    useSystemColorMode: true,
}

const fonts = {
    heading: 'Baloo',
    body: 'Comfortaa',
}

const overrides = extendTheme({
    styles: {
        global: (props) => ({
            h2: {
                fontSize: '2px',
            }
        }),
    },
})

const theme = extendTheme({
    styles,
    config,
    fonts,
    overrides,
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
            }
        },
    }
})

export default theme