// import React from 'react';
// import useDeviceDetect from '../../hooks/useDeviceDetect';
// import { Stack, Box, Typography } from '@mui/material';
// import Link from 'next/link';
// import { REACT_APP_API_URL } from '../../config';
// import IconButton from '@mui/material/IconButton';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useReactiveVar } from '@apollo/client';
// import { userVar } from '../../../apollo/store';

// interface AgentCardProps {
// 	agent: any;
// 	likeMemberHandler: any;
// }

// const AgentCard = (props: AgentCardProps) => {
// 	const { agent, likeMemberHandler} = props;
// 	const device = useDeviceDetect();
// 	const user = useReactiveVar(userVar);
// 	const imagePath: string = agent?.memberImage
// 		? `${REACT_APP_API_URL}/${agent?.memberImage}`
// 		: '/img/profile/defaultUser.svg';

// 	if (device === 'mobile') {
// 		return <div>AGENT CARD</div>;
// 	} else {
// 		return (
// 			<Stack className="agent-general-card">
// 				<Link
// 					href={{
// 						pathname: '/agent/detail',
// 						query: { agentId: agent?._id },
// 					}}
// 				>
// 					<Box
// 						component={'div'}
// 						className={'agent-img'}
// 						style={{
// 							backgroundImage: `url(${imagePath})`,
// 							backgroundSize: 'cover',
// 							backgroundPosition: 'center',
// 							backgroundRepeat: 'no-repeat',
// 						}}
// 					>
// 						<div>{agent?.memberProperties} properties</div>
// 					</Box>
// 				</Link>

// 				<Stack className={'agent-desc'}>
// 					<Box component={'div'} className={'agent-info'}>
// 						<Link
// 							href={{
// 								pathname: '/agent/detail',
// 								query: { agentId: agent?._id },
// 							}}
// 						>
// 							<strong>{agent?.memberFullName ?? agent?.memberNick}</strong>
// 						</Link>
// 						<span>Agent</span>
// 					</Box>
// 					<Box component={'div'} className={'buttons'}>
// 						<IconButton color={'default'}>
// 							<RemoveRedEyeIcon />
// 						</IconButton>
// 						<Typography className="view-cnt">{agent?.memberViews}</Typography>
// 						<IconButton color={'default'} onClick={() => likeMemberHandler(user, agent?._id)}>
// 							{agent?.meLiked && agent?.meLiked[0]?.myFavorite ? (
// 								<FavoriteIcon color={'primary'} />
// 							) : (
// 								<FavoriteBorderIcon />
// 							)}
// 						</IconButton>
// 						<Typography className="view-cnt">{agent?.memberLikes}</Typography>
// 					</Box>
// 				</Stack>
// 			</Stack>
// 		);
// 	}
// };

// export default AgentCard;


import React, { useState, useEffect } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack, Box, Typography } from '@mui/material';
import Link from 'next/link';
import { REACT_APP_API_URL } from '../../config';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';
import { keyframes } from '@mui/system';

// Define the fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define hover effect for image and like button
const hoverImage = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const hoverButton = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

interface AgentCardProps {
	agent: any;
	likeMemberHandler: any;
}

const AgentCard = (props: AgentCardProps) => {
	const { agent, likeMemberHandler } = props;
	const device = useDeviceDetect();
	const user = useReactiveVar(userVar);
	const imagePath: string = agent?.memberImage
		? `${REACT_APP_API_URL}/${agent?.memberImage}`
		: '/img/profile/defaultUser.svg';

	// State to handle the fade-in effect
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Fade in after the component mounts
		setIsVisible(true);
	}, []);

	if (device === 'mobile') {
		return <div>AGENT CARD</div>;
	} else {
		return (
			<Stack
				className="agent-general-card"
				sx={{
					animation: `${fadeIn} 1s ease-out`, // Apply fade-in animation
					opacity: isVisible ? 1 : 0,
				}}
			>
				<Link
					href={{
						pathname: '/agent/detail',
						query: { agentId: agent?._id },
					}}
				>
					<Box
						component={'div'}
						className={'agent-img'}
						sx={{
							backgroundImage: `url(${imagePath})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							// Apply hover effect to image
							'&:hover': {
								animation: `${hoverImage} 0.3s ease-in-out forwards`,
							},
						}}
					>
						<div>{agent?.memberProperties} properties</div>
					</Box>
				</Link>

				<Stack className={'agent-desc'}>
					<Box component={'div'} className={'agent-info'}>
						<Link
							href={{
								pathname: '/agent/detail',
								query: { agentId: agent?._id },
							}}
						>
							<strong>{agent?.memberFullName ?? agent?.memberNick}</strong>
						</Link>
						<span>Agent</span>
					</Box>
					<Box component={'div'} className={'buttons'}>
						<IconButton
							color={'default'}
							sx={{
								// Apply hover effect to like button
								'&:hover': {
									animation: `${hoverButton} 0.3s ease-in-out forwards`,
								},
							}}
						>
							<RemoveRedEyeIcon />
						</IconButton>
						<Typography className="view-cnt">{agent?.memberViews}</Typography>
						<IconButton color={'default'} onClick={() => likeMemberHandler(user, agent?._id)}>
							{agent?.meLiked && agent?.meLiked[0]?.myFavorite ? (
								<FavoriteIcon color={'primary'} />
							) : (
								<FavoriteBorderIcon />
							)}
						</IconButton>
						<Typography className="view-cnt">{agent?.memberLikes}</Typography>
					</Box>
				</Stack>
			</Stack>
		);
	}
};

export default AgentCard;
