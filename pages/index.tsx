import { NextPage } from 'next';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import PopularProperties from '../libs/components/homepage/PopularProperties';
import TopAgents from '../libs/components/homepage/TopAgents';
import Events from '../libs/components/homepage/Events';
import TrendProperties from '../libs/components/homepage/TrendProperties';
import TopProperties from '../libs/components/homepage/TopProperties';
import { Stack } from '@mui/material';
import Advertisement from '../libs/components/homepage/Advertisement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LatestNews from '../libs/components/homepage/LatestNews';
import ImageGallery from '../libs/components/homepage/ImageGallery';
import ImageLogo from '../libs/components/homepage/ImageLogo';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const Home: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return (
			<Stack className={'home-page'}>
				<TrendProperties />
				<PopularProperties />
				<Advertisement />
				<TopProperties />
				<TopAgents />
				<LatestNews />
				<ImageGallery />
			</Stack>
		);
	} else {
		return (
			<Stack className={'home-page'}>
				<TrendProperties />
				<ImageGallery />
				{/* <PopularProperties /> */}
				<TopProperties />
				{/* <LatestNews /> */}
				{/* <Events /> */}
				<Advertisement />
				<TopAgents />
				<ImageLogo />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
