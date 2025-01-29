import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Property } from '../../types/property/property';
import Link from 'next/link';
import { PropertiesInquiry } from '../../types/property/property.input';
import { GET_PROPERTIES } from '../../../apollo/user/query';
import { useQuery } from '@apollo/client';
import { T } from '../../types/common';
import PopularPropertyCard from '../homepage/PopularPropertyCard';

interface PopularPropertiesProps {
	initialInput: PropertiesInquiry;
}

const PopularProperties = (props: PopularPropertiesProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const [popularProperties, setPopularProperties] = useState<Property[]>([]);

	/** APOLLO REQUESTS **/
	const {loading: getPropertiesLoading,
		data: getPropertiesData,
		error: getPropertiesError,
		refetch: getPropertiesRefetch,
	} = useQuery(GET_PROPERTIES , {
		fetchPolicy: 'cache-and-network',
		variables: { input: initialInput},
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => {
			setPopularProperties(data?.getProperties?.list)
		}
	})
	
	/** HANDLERS **/

	if (!popularProperties) return null;

	return (
		<Stack className={'popular-properties'}>
			<Stack className={'container'}>
				<Stack className={'info-box'}>
					<Box component={'div'} className={'left'}>
						<span>Popular Cars</span>
						<p>Popularity is based on views</p>
					</Box>
				</Stack>
				<Stack className={'card-box'}>
					{popularProperties.length === 0 ? (
						<Box component={'div'} className={'empty-list'}>
							No popular cars available
						</Box>
					) : (
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{popularProperties.map((property: Property) => {
								return (
									<Box key={property._id} className={'popular-property-card'}>
										<PopularPropertyCard property={property} />
									</Box>
								);
							})}
						</Stack>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

PopularProperties.defaultProps = {
	initialInput: {
		page: 1,
		limit: 8,
		sort: 'propertyViews',
		direction: 'DESC',
		search: {},
	},
};

export default PopularProperties;
