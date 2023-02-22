import React, { useRef } from 'react';
import Image from 'next/image';
import CustomInput from './CustomInput';
import CustomButton from '@/components/CustomButton';
import { Box, Center, Flex, Input, InputGroup, Stack, Text, Textarea } from '@chakra-ui/react';

import VideoIcon from '@/assets/video.svg';
import ImageIcon from '@/assets/image.svg';
import { ItemInfoProps } from '@/interfaces';

const ItemInfo = ({ createBidCallback }: ItemInfoProps): JSX.Element => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <Stack w='xl' spacing='16px'>
            <CustomInput labelName='Name' placeholder='Enter a name to identify your item' value={''} onChange={() => {}} name='amount' type='text' />
            <CustomInput
                labelName='Price'
                placeholder='Enter a price you value your item'
                value={''}
                onChange={() => {}}
                name='price'
                type='number'
            />
            <InputGroup flexDir='column'>
                <Text color='#2d2d2d' opacity={'85%'} fontWeight='500' mb='4px'>
                    Description
                </Text>
                <Textarea _placeholder={{ color: '#2d2d2d', opacity: '50%' }} placeholder='Describe the details of your item/product' />
            </InputGroup>
            <Box pb='16px'>
                <Text color='#2d2d2d' opacity={'85%'} fontWeight='500' mb='4px'>
                    Add an Image or Video
                </Text>
                <Text fontSize='13px' color='#2d2d2d' opacity={'85%'} fontWeight='300' mb='8px'>
                    What better way to describe your item with an image or a video
                </Text>
                <Flex
                    onClick={() => fileInputRef.current?.click()}
                    justifyContent='center'
                    alignItems='center'
                    bgColor='#e5ecff'
                    w='400px'
                    h='250px'
                    flexDir='column'
                >
                    <Center
                        filter='drop-shadow(0px 4px 4px rgba(36, 16, 184, 0.12));'
                        mb='-16px'
                        borderRadius='32px'
                        w='40px'
                        h='40px'
                        bgColor='white'
                        zIndex='10'
                    >
                        <Image width='20' height='16' src={ImageIcon} alt='an image icon' />
                    </Center>
                    <Flex
                        position='relative'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='16px'
                        mb='16px'
                        bgColor='white'
                        w='170px'
                        h='120px'
                    >
                        <Center
                            filter='drop-shadow(0px 4px 4px rgba(36, 16, 184, 0.12));'
                            mb='-16px'
                            borderRadius='32px'
                            w='40px'
                            h='40px'
                            bgColor='white'
                            position='absolute'
                            left='-18px'
                            top='40px'
                        >
                            <Image width='20' height='16' src={VideoIcon} alt='a video icon' />
                        </Center>
                        <Flex justifyContent='center' alignItems='center' borderRadius='8px' h='60px' w='100px' border='1px dashed  #b3c6ff'>
                            <svg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M12 0L22.3923 10.7692H1.6077L12 0Z' fill='#0000b3' />
                                <rect x='7.30469' y='10.769' width='9.3913' height='9.23071' fill='#1616b5' />
                            </svg>
                        </Flex>
                    </Flex>
                </Flex>
                <Input ref={fileInputRef} display='none' placeholder='none' width='fit-content' border='1px solid red' type='file' />
            </Box>
            <CustomButton onClick={createBidCallback} backgroundColor='#0000b3' width={{ base: '150px' }} height='48px'>
                Create Bid
            </CustomButton>
        </Stack>
    );
};

export default ItemInfo;
