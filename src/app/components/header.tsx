'use client';
import { ChangeEvent } from 'react';
import { Box } from '@welcome-ui/box';
import { Shape } from '@welcome-ui/shape';
import Image from 'next/image';
import GroupBy from './groupBy';
import FilterBy from './filterBy';
import Search from './search';

export default function Header({
	selectGroupValues,
	selectFiltersValues,
	handleChange,
	handleFilterChange,
	handleSelectChange,
}: {
	selectGroupValues: string;
	selectFiltersValues: undefined | string[];
	handleChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
	handleFilterChange: any;
	handleSelectChange: ((value: any) => void) | undefined;
}) {
	return (
		<Box w="100%" position="sticky" top="0" left="0" borderBottom="1px solid black" background="white" zIndex="999">
			<Box
				p="xl"
				w={{ _: '100%', lg: '960px' }}
				m="auto"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection={{ _: 'column', md: 'row' }}
			>
				<Shape minWidth="100px" maxWidth="120px" w="100%" mr="xxl" mb={{ _: 'lg', md: '0' }}>
					<Image
						width="150"
						height="60"
						src="https://cdn.welcometothejungle.com/wttj-front/production/assets/images/logos/wttj.svg"
						alt="logo"
					/>
				</Shape>
				<Box display="flex" w="100%" flexWrap="wrap">
					<Search handleChange={handleChange} />
					<GroupBy handleSelectChange={handleSelectChange} selectGroupValues={selectGroupValues} />
					<FilterBy selectFiltersValues={selectFiltersValues} handleFilterChange={handleFilterChange} />
				</Box>
			</Box>
		</Box>
	);
}
