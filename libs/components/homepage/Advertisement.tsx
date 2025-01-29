import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack } from '@mui/material';

const Advertisement = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return (
			<Stack className={'video-frame'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '110%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/car4.mp4" type="video/mp4" />
				</video>
			</Stack>
		);
	} else {
		return (
			<Stack className={'video-frame'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '210%', height: '100%', objectFit: 'cover', marginLeft: "-47%" }}
				>
					<source src="/video/car4.mp4" type="video/mp4" />
				</video>
			</Stack>
		);
	}
};

export default Advertisement;
