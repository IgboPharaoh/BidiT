import { Flex, Text, Link, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import CustomButton from './CustomButton';

const Header = (): JSX.Element => {
    const router = useRouter();
    return (
        <Flex ml='80px' mr='80px' gap='64px' justifyContent='space-between'>
            <HStack width='100%' justifyContent='space-between'>
                <Text
                    onClick={() => {
                        router.push('/');
                    }}
                    fontSize='24px'
                    fontWeight='600'
                    color='#0000b3'
                    cursor='pointer'
                >
                    BidiT
                </Text>
                <Link fontWeight='600' href='/auction'>
                    Auction
                </Link>
            </HStack>
            <HStack width='100%' justifyContent='space-between'>
                <Link fontWeight='600' href='/history'>
                    History
                </Link>
                <CustomButton
                    onClick={() => {
                        router.push('/create');
                    }}
                    backgroundColor='#0000b3'
                    width={{ base: '150px' }}
                    height='48px'
                >
                    Create Account
                </CustomButton>
            </HStack>
        </Flex>
    );
};

export default Header;
