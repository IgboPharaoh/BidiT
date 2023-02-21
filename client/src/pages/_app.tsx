import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Raleway } from '@next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <main className={raleway.className}>
                <Component {...pageProps} />
            </main>
        </ChakraProvider>
    );
}
