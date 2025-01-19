import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="index.follow" />
				<link rel="icon" type="image/png" href="/img/car/carlogo1.avif" />

				{/* SEO */}
				<meta name="keyword" content={'nestar, nestar.uz, devex mern, mern nestjs fullstack'} />
				<meta
					name={'description'}
					content={
						'Buy and sell cars anywhere anytime. Best cars at the best prices on DriverX.uz | ' +
						'Покупайте и продавайте автомобили в любой точке в любое время. Лучшие автомобили по лучшим ценам на DriverX.uz | ' +
						'언제 어디서나 자동차를 사고팔 수 있습니다. DriverX.uz에서 최적의 가격으로 최고의 자동차를 만나보세요'
					}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
