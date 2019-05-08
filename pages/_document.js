'use strict';

import Document, { Head, Main, NextScript } from 'next/document'

import MainNavigation from 'components/main-navigation';

export default class App extends Document {
	
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	
	render() {
		
		const { props } = this;
		
		return (
			<html>
			<Head>
				<title></title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" /> 
				<link rel="stylesheet" href="/_next/static/style.css" />
			</Head>
			<body>
				<noscript className="no-js-alert">
					<p>This site works best when JavaScript is available in your browser.</p>
				</noscript>
				<MainNavigation items={[
					{ href: '/', text: 'Home' },
					{ href: '/about', text: 'About' }
				]} />
				<main>
					<Main />
				</main>
			</body>
			</html>
		)
	}
}
