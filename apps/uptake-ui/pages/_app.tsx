import Head from 'next/head';
import { AppProps } from 'next/app';
import { Fragment } from 'react';

import '../public/styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>Welcome to uptake-ui!</title>
			</Head>

			<main className='app'>
				<Component {...pageProps} />
			</main>
		</Fragment>
	);
}

export default CustomApp;
