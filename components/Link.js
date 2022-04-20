import NextLink from 'next/link';
import {
    Link as ChakraLink,
} from '@chakra-ui/react';

const Link = ({ href, children, ...props }) => {
    return (
        <NextLink scroll={false} href={href} passHref style={{ hover: "none" }}>
            <ChakraLink {...props}>
                {children}
            </ChakraLink>
        </NextLink>
    );
};

export default Link;