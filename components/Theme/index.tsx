import {
	extendTheme,
	ThemeConfig,
	ChakraProvider,
	cookieStorageManager,
	localStorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

export const Chakra: React.FunctionComponent<{
	cookies: string | undefined;
}> = ({ cookies, children }) => {
	const colorModeManager =
		typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

	return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			cookies: context.req.headers.cookie ?? '',
		},
	};
};

const theme = extendTheme({ config });

export default theme;
