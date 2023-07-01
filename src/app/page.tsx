'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@welcome-ui/box';
import { Job } from './interface';
import { sortById } from './utils/utils';
import OfferList from './components/offerList';
import useFetch from './utils/fetch';
import Header from './components/header';

export default function Home() {
	const { data, loading, error } = useFetch('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
	const [searchItems, setSearchItems] = useState<Job[] | []>([]);
	const [selectValues, setSelectValues] = useState<string>('department');

	useEffect(() => {
		if (data.length > 0) {
			setSearchItems(data);
		}
	}, [data]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const eventValue = event.target.value;
		if (eventValue === undefined) {
			setSearchItems(data);
		} else {
			setSearchItems(data?.filter((item) => item.name.toLowerCase().includes(eventValue.toLowerCase())));
		}
	};

	const handleSelectChange = (value: string) => {
		setSelectValues(value);
	};

	const filterResultsByCategory = () => {
		if (selectValues !== 'none') {
			return sortById(searchItems, selectValues);
		} else {
			return searchItems;
		}
	};

	const results = filterResultsByCategory();

	return (
		<>
			<Header selectValues={selectValues} handleChange={handleInputChange} handleSelectChange={handleSelectChange} />

			<Box p="xl" w={{ _: '100%', lg: '960px' }} m="auto">
				<OfferList loading={loading} error={error} data={results} />
			</Box>
		</>
	);
}
