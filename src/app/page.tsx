'use client';
import { useState, useEffect } from 'react';
import { Box } from '@welcome-ui/box';
import { Job } from './interface';
import { Search } from '@welcome-ui/search';
import { Select } from '@welcome-ui/select';
import Offer from './components/offer';
import useFetch from './utils/fetch';

export default function Home() {
	const [selectValues, setSelectValues] = useState('office');
	const { data, loading, error } = useFetch('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
	const [searchItems, setSearchItems] = useState<Job[] | []>([]);

	useEffect(() => {
		if (data.length > 0) {
			setSearchItems(data);
		}
	}, [data]);

	const handleChange = (value: any) => {
		if (value === undefined) {
			setSearchItems(data);
		} else {
			setSearchItems([value]);
		}
	};

	const handleSelectChange = (value: any) => {
		setSelectValues(value);
	};

	const filterResultsByCategory = () => {
		if (selectValues !== 'none') {
			// @ts-expect-error
			const sortedResults = [...searchItems].sort((a, b) => (a[selectValues]?.id ?? 0) - (b[selectValues]?.id ?? 0));
			return sortedResults;
		} else {
			return searchItems;
		}
	};

	const results = filterResultsByCategory();

	const fetchedContent = () => {
		if (loading) {
			return <div> Loading ... </div>;
		} else if (error) {
			return <div> Oops Something went wrong! {error}</div>;
		} else {
			return (
				<Box display="flex" w="100%" alignItems="center" justifyContent="center" flexWrap="wrap">
					{results.map((result) => {
						return <Offer key={result.id} data={result}></Offer>;
					})}
				</Box>
			);
		}
	};

	return (
		<Box p="xl" w={{ _: '100%', lg: '960px' }} m="auto">
			<Box display="flex" w="100%">
				<Search
					w="100%"
					pr="lg"
					pb="lg"
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
				<Select
					minWidth={'120px'}
					options={[
						{ label: 'Department', value: 'department' },
						{ label: 'Office', value: 'office' },
						{ label: 'None', value: 'none' },
					]}
					name="filters"
					value={selectValues}
					onChange={handleSelectChange}
				/>
			</Box>
			{fetchedContent()}
		</Box>
	);
}
