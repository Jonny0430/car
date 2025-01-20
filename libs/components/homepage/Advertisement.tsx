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
					style={{ width: '100%', height: '110%', objectFit: 'cover' }}
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
					style={{ width: '100%', height: '110%', objectFit: 'cover' }}
				>
					<source src="/video/car4.mp4" type="video/mp4" />
				</video>
			</Stack>
		);
	}
};

export default Advertisement;
