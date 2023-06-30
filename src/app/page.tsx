'use client';
import { useState, useEffect } from 'react';
import { Box } from '@welcome-ui/box';
import { Job } from './interface';
import { Search } from '@welcome-ui/search';
import Offer from './components/offer';
import useFetch from './utils/fetch';

export default function Home() {
	const { data, loading, error } = useFetch('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
	const [searchItems, setSearchItems] = useState<Job[] | []>([]);

	useEffect(() => {
		setSearchItems(data);
	}, [data]);

	const handleChange = (newValue: any) => {
		if (newValue === undefined) {
			setSearchItems(data);
		} else {
			setSearchItems([newValue]);
		}
	};

	const fetchedContent = () => {
		if (loading) {
			return <div> Loading ... </div>;
		} else if (error) {
			return <div> Oops Something went wrong!</div>;
		} else {
			return (
				<Box display="flex" w="100%" alignItems="center" justifyContent="center" flexWrap="wrap">
					{searchItems.map((result) => {
						return <Offer key={result.id} data={result}></Offer>;
					})}
				</Box>
			);
		}
	};

	return (
		<Box p="xl" w={{ _: '100%', lg: '960px' }} m="auto">
			<Search
				// @ts-expect-error
				renderItem={(item) => item && <div style={{ display: 'flex', alignItems: 'center' }}>{item.name}</div>}
				// @ts-expect-error
				itemToString={(item) => item && item.name}
				placeholder="Search for a job"
				onChange={handleChange}
				search={async function asyncSearch(query) {
					return data?.filter((item) => item.name.toLowerCase().includes(query));
				}}
			/>
			{fetchedContent()}
		</Box>
	);
}
