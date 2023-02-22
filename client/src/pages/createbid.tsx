import React, { useState } from 'react';

import Header from '@/components/Header';
import Stepper from '@/components/Stepper';
import { Box, Stack, Text } from '@chakra-ui/react';

import PaymentChoice from '@/components/PaymentChoice';
import ItemInfo from '@/components/ItemInfo';

const CreateBid = (): JSX.Element => {
    const [step, setStep] = useState(0);
    const [showStep, setShowStep] = useState(true);

    return (
        <Box pt='16px'>
            <Header />
            <Box m='12px 80px 0px 80px'>
                <Text fontSize='36px' fontWeight='500'>
                    Create a Bid
                </Text>
                <Text fontWeight='300' fontSize='15px'>
                    Fill in the necessary information to join the marketplace with your product
                </Text>
            </Box>
            <Box gap='300px' alignItems='flex-start' display='flex' justifyContent='space-between' width='fit-content' m='24px 80px 0px 80px'>
                <Stack spacing='32px'>
                    <Stepper title='Create a bid' />
                    <Stepper title='Choose payment method' />
                    <Stepper completed={false} stepBgColor='#0000b3' title='Complete payment method' />
                    <Stepper completed={false} stepBgColor='#0000b3' title='View transction status' showStep={false} />
                </Stack>
                <Box boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' p='32px' borderRadius='4px'>
                    {/* step one in creating a bid */}
                    {showStep && step === 0 && <ItemInfo createBidCallback={() => setStep(1)} />}

                    {/* step two in creating a bid */}
                    {showStep && step === 1 && (
                        <PaymentChoice onPreviousCallback={() => setStep(0)} onNextCallback={() => setStep(2)} selected={false} />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default CreateBid;
