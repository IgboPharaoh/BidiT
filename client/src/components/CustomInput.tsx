import React from 'react';
import { InputGroup, Text, Input } from '@chakra-ui/react';
import { InputProps } from '@/interfaces';

const CustomInput = ({ labelName, ...props }: InputProps) => {
    return (
        <InputGroup flexDir='column'>
            <Text fontSize='14px' color='#2d2d2d' opacity={'85%'} fontWeight='500' mb='4px'>
                {labelName}
            </Text>
            <Input height='42px' _placeholder={{ color: '#2d2d2d', opacity: '50%' }} {...props} />
        </InputGroup>
    );
};

export default CustomInput;
