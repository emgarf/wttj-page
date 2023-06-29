'use client';
import styles from './page.module.css';
import { Box } from '@welcome-ui/box';
import Offer from './components/offer';
import useFetch from 'react-fetch-hook';
import { FetchWelcomeData } from './interface';

export default function Home() {
	const { isLoading, data }: { isLoading: boolean; data?: FetchWelcomeData } = useFetch(
		'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k'
	);

	console.log(data);

	const fetchedContent = () => {
		return isLoading ? (
			<div> Loading ... </div>
		) : (
			<Box display="flex" w="100%" justifyContent="center" alignItems="center" flexWrap="wrap">
				{data?.jobs.map((result) => {
					console.log(result);
					return <Offer key={result.id} data={result}></Offer>;
				})}
			</Box>
		);
	};

	return <Box p="xl">{fetchedContent()}</Box>;
}
