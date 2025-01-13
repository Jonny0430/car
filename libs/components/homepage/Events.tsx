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
			imageSrc: '/img/events/INCHEON.webp', // Replace with the path to your car image
	},
	{
		eventTitle: 'Futuristic Car Racing Championship',
		city: 'Seoul',
		description:'If you are a fan of high-speed cars, don\'t miss the Futuristic Car Racing Championship in Seoul! Watch sleek, modern cars race through neon-lit streets at night, showcasing cutting-edge automotive technology.',
		imageSrc: '/img/events/SEOUL.webp', 
	},
	{
		eventTitle: 'Luxury Car Exhibition',
        city: 'Daegu',
        description:'The Luxury Car Exhibition is a stunning display of high-end, futuristic vehicles held alongside the scenic Suseong Lake in Daegu. Experience the elegance and performance of the latest luxury cars from around the world.',
        imageSrc: '/img/events/DAEGU.webp', 
	},
	{
		eventTitle: 'Futuristic Car Showcase',
		city: 'Busan',
		description:
		  'The Futuristic Car Showcase is an exciting event showcasing the latest in high-tech, eco-friendly vehicles, held on the beautiful Haeundae Beach in Busan. See the cutting-edge designs and innovations of tomorrow’s cars, all under the sun and the open sky!',
		imageSrc: '/img/events/BUSAN.webp',
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
