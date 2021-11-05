import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

import '../styles/globals.css';
import { Chakra } from '../components/Theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Chakra>
	);
}
export { getServerSideProps } from '../components/Theme';

export default MyApp;
