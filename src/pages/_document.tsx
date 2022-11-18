import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
				<Head>
					<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
					<link rel="icon" sizes="16x16" href="/favicons/favicon-16x16.png" type="image/png" />
					<link rel="icon" sizes="32x32" href="/favicons/favicon-32x32.png" type="image/png" />
					<link
						rel="apple-touch-icon-precomposed"
						href="/favicons/apple-touch-icon-precomposed.png"
					/>
					<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/favicons/apple-touch-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/favicons/apple-touch-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/favicons/apple-touch-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/favicons/apple-touch-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/favicons/apple-touch-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/favicons/apple-touch-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/favicons/apple-touch-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/favicons/apple-touch-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="167x167"
						href="/favicons/apple-touch-icon-167x167.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon-180x180.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="1024x1024"
						href="/favicons/apple-touch-icon-1024x1024.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modal" />
				</body>
			</Html>
		);
	}
}
