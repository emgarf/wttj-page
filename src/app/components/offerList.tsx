'use client';
import { Box } from '@welcome-ui/box';
import { Job } from '../interface';
import { Text } from '@welcome-ui/text';
import { Loader } from '@welcome-ui/loader';
import Offer from './offer';

interface Props {
	loading: boolean;
	error: string | null;
	data: Job[];
}

export default function OfferList({ loading, error, data }: Props) {
	if (loading) {
		return (
			<Box display="flex" justifyContent="center" mt="20vh" alignItems="center" flexDirection="column">
				<Text>Please wait while we are fetching your datas</Text>
				<Loader color="#FFCD00" size={50} />
			</Box>
		);
	} else if (error) {
		return (
			<Box display="flex" justifyContent="center" mt="20vh">
				<Text textAlign="center">
					Oops Something went wrong! <br /> Try reloading your page
				</Text>
			</Box>
		);
	} else {
		if (!data.length) {
			return (
				<Box textAlign="center" mt="10vh">
					<Text fontSize="1.5em" w="100%">
						Looks like there are no results matching your filters. :(
					</Text>
				</Box>
			);
		}
		return (
			<Box display="flex" w="100%" alignItems="center" justifyContent="center" flexWrap="wrap">
				{data.map((item) => {
					return <Offer key={item.id} data={item}></Offer>;
				})}
			</Box>
		);
	}
}
