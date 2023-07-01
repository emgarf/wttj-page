'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@welcome-ui/box';
import { Job } from './interface';
import { Select } from '@welcome-ui/select';
import { InputText } from '@welcome-ui/input-text';
import { sortById } from './utils/utils';
import OfferList from './components/offerList';
import useFetch from './utils/fetch';

export default function Home() {
	const { data, loading, error } = useFetch('https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k');
	const [searchItems, setSearchItems] = useState<Job[] | []>([]);
	const [selectValues, setSelectValues] = useState<string>('department');

	useEffect(() => {
		if (data.length > 0) {
			setSearchItems(data);
		}
	}, [data]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
		<Box p="xl" w={{ _: '100%', lg: '960px' }} m="auto">
			<Box display="flex" w="100%">
				<Box w="100%" pr="lg" pb="lg" minWidth="180px">
					<InputText placeholder="Search for a job" onChange={handleChange} isClearable={false} />
				</Box>
				<Select
					label="Group by"
					w="100%"
					maxWidth="250px"
					options={[
						{ label: 'All', value: 'none' },
						{ label: 'Department', value: 'department' },
						{ label: 'Office', value: 'office' },
					]}
					name="filters"
					value={selectValues}
					// @ts-expect-error
					onChange={handleSelectChange}
				/>
			</Box>

			<OfferList loading={loading} error={error} data={results} />
		</Box>
	);
}
