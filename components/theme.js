import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
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
        h3: {
            fontSize: `baseTheme.fontSizes.sm`
        },
        h2: {
            fontSize: baseTheme.fontSizes.sm
        },
        h1: {
            fontSize: '2px'
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

const theme = extendTheme({
    styles,
    config,
    fonts,
})

export default theme