import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}
const eventsData: EventData[] = [
	{
			eventTitle: 'Speed Racing Championship',
			city: 'Seoul',
			description:
			  'Get ready for a thrilling experience at the Speed Racing Championship in Seoul! Witness high-speed cars race through the streets of the city under neon lights at night.',
			imageSrc: 'https://carconfigurator.ferrari.com/rt-assets/data/cars/sf90spider/ui/splashpage.jpg', // Replace with the path to your car image
	},
	{
		eventTitle: 'Futuristic Car Racing Championship',
		city: 'Seoul',
		description:'If you are a fan of high-speed cars, don\'t miss the Futuristic Car Racing Championship in Seoul! Watch sleek, modern cars race through neon-lit streets at night, showcasing cutting-edge automotive technology.',
		imageSrc: 'https://carconfigurator.ferrari.com/rt-assets/data/cars/12cilindri/ui/splashpage.jpg', 
	},
	{
		eventTitle: 'Luxury Car Exhibition',
        city: 'Daegu',
        description:'The Luxury Car Exhibition is a stunning display of high-end, futuristic vehicles held alongside the scenic Suseong Lake in Daegu. Experience the elegance and performance of the latest luxury cars from around the world.',
        imageSrc: 'https://www.astonmartin.com/-/media/models---dbx707/dbx707-25my---november-2024-refresh/dbx707_low_res_24_desktop_hero_1920x1080.jpg?mw=1920&rev=6c89f0c39b3d4b47b924915a01ec73b2&hash=76DA0536507CFA4AAC79EF5068C39778', 
	},
	{
		eventTitle: 'Futuristic Car Showcase',
		city: 'Busan',
		description:
		  'The Futuristic Car Showcase is an exciting event showcasing the latest in high-tech, eco-friendly vehicles, held on the beautiful Haeundae Beach in Busan. See the cutting-edge designs and innovations of tomorrow’s cars, all under the sun and the open sky!',
		imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2022-acura-nsx-type-s-1-1628792637.jpg?crop=0.768xw:0.871xh;0.0593xw,0&resize=768:*',
	},
];

const EventCard = ({ event }: { event: EventData }) => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack
				className="event-card"
				style={{
					backgroundImage: `url(${event?.imageSrc})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box component={'div'} className={'info'}>
					<strong>{event?.city}</strong>
					<span>{event?.eventTitle}</span>
				</Box>
				<Box component={'div'} className={'more'}>
					<span>{event?.description}</span>
				</Box>
			</Stack>
		);
	}
};

const Events = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack className={'events'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span className={'white'}>Events</span>
							<p className={'white'}>Events waiting your attention!</p>
						</Box>
					</Stack>
					<Stack className={'card-wrapper'}>
						{eventsData.map((event: EventData) => {
							return <EventCard event={event} key={event?.eventTitle} />;
						})}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Events;
