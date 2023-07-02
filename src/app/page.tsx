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
	const [search, setSearch] = useState<string>('');
	const [results, setResults] = useState<Job[] | []>([]);
	const [groupBy, setGroupBy] = useState<string>('department');
	const [filterBy, setFilterBy] = useState<string[] | undefined>([]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const handleSelectChange = (value: string) => {
		setGroupBy(value);
	};

	const handleFilterChange = (value: string[]) => {
		setFilterBy(value);
	};

	// filter the jobs based on the search query, the "group by" field and the "filter by" field
	useEffect(() => {
		if (loading === true) return;
		// res contains an array of all the jobs that match the search
		const res = data.filter((item) => {
			const name = item.name.toLowerCase();
			return name.includes(search.toLowerCase());
		});

		const sortedResults = sortById(res, groupBy);
		setResults(sortedResults);

		// filter the sorted results
		if (filterBy && filterBy?.length > 0) {
			setResults(sortedResults.filter((item) => filterBy?.includes(item.contract_type.en)));
		}
	}, [data, search, loading, groupBy, filterBy]);

	return (
		<>
			<Header
				selectGroupValues={groupBy}
				selectFiltersValues={filterBy}
				handleFilterChange={handleFilterChange}
				handleChange={handleInputChange}
				handleSelectChange={handleSelectChange}
			/>

			<Box p="xl" w={{ _: '100%', lg: '960px' }} m="auto">
				<OfferList loading={loading} error={error} data={results} />
			</Box>
		</>
	);
}
