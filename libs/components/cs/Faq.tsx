import React, { SyntheticEvent, useState } from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
	({ theme }) => ({
		border: `1px solid ${theme.palette.divider}`,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
	}),
);
const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: '1.4rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#fff',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const Faq = () => {
	const device = useDeviceDetect();
	const router = useRouter();
	const [category, setCategory] = useState<string>('property');
	const [expanded, setExpanded] = useState<string | false>('panel1');

	/** APOLLO REQUESTS **/
	/** LIFECYCLES **/
	
	/** HANDLERS **/
	const changeCategoryHandler = (category: string) => {
		setCategory(category);
	};

	const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

	const data: any = {
		property: [
			{
				id: '00f5a45ed8897f8090116a01',
				subject: "Are the cars displayed on the site reliable?",
                content: "Of course, we only have verified cars.",
			},
			{
				id: '00f5a45ed8897f8090116a22',
				subject: "What types of cars do you offer?",
                content: "We offer sedans, SUVs, trucks, coupes, and convertibles.",
			},
			{
				id: '00f5a45ed8897f8090116a21',
				subject: "How can I search for cars on your website?",
                content: "Simply use our search bar to enter the make, model, price range, year, and car type.",
			},
			{
				id: '00f5a45ed8897f8090116a23',
				subject: "Do you provide assistance for first-time car buyers?",
                content: "Yes, we guide you through the process and help find suitable financing options.",
			},
			{
				id: '00f5a45ed8897f8090116a24',
				subject: "What should I consider when buying a car?",
                content: "Make, model, condition, mileage, features, and price.",
			},
		],
		payment: [
		    {
				id: '00f5a45ed8897f8090116a02',
				subject: "How can I make the payment?",
                content: "You can make the payment through an agent!",  
			},
		],
		membership: [
			 {
				id: '00f5a45ed8897f8090116a05',
				subject: "Do you have a membership service on your site?",
				content: "A membership service is not available on our site yet!",
			 },
		],
		community: [
			{
				id: '00f5a45ed8897f8090116a06',
				subject: "What should I do if there is abusive or criminal behavior in the car listings?",
                content: "If you encounter this situation, please report it immediately or contact our support team!",
			 },
		],
		other: [
			{
				id: '00f5a45ed8897f8090116a40',
				subject: "Who should I contact if I want to buy a car from your site?",
                content: "Feel free to contact our sales team for more information on purchasing a car!",
			},
		],
	};

	if (device === 'mobile') {
		return <div>FAQ MOBILE</div>;
	} else {
		return (
			<Stack className={'faq-content'}>
				<Box className={'categories'} component={'div'}>
					<div
						className={category === 'property' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('property');
						}}
					>
						Property
					</div>
					<div
						className={category === 'payment' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('payment');
						}}
					>
						Payment
					</div>
					<div
						className={category === 'buyers' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('buyers');
						}}
					>
						Foy Buyers
					</div>
					<div
						className={category === 'agents' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('agents');
						}}
					>
						For Agents
					</div>
					<div
						className={category === 'membership' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('membership');
						}}
					>
						Membership
					</div>
					<div
						className={category === 'community' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('community');
						}}
					>
						Community
					</div>
					<div
						className={category === 'other' ? 'active' : ''}
						onClick={() => {
							changeCategoryHandler('other');
						}}
					>
						Other
					</div>
				</Box>
				<Box className={'wrap'} component={'div'}>
					{data[category] &&
						data[category].map((ele: any) => (
							<Accordion expanded={expanded === ele?.id} onChange={handleChange(ele?.id)} key={ele?.subject}>
								<AccordionSummary id="panel1d-header" className="question" aria-controls="panel1d-content">
									<Typography className="badge" variant={'h4'}>
										Q
									</Typography>
									<Typography> {ele?.subject}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Stack className={'answer flex-box'}>
										<Typography className="badge" variant={'h4'} color={'primary'}>
											A
										</Typography>
										<Typography> {ele?.content}</Typography>
									</Stack>
								</AccordionDetails>
							</Accordion>
						))}
				</Box>
			</Stack>
		);
	}
};

export default Faq;
