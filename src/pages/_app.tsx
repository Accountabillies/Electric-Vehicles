import '@/styles/globals.css';
import RootLayout from '@/components/Layout';

type AppProps = {
    Component: any;
    pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}