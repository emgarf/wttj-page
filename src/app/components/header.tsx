'use client';
import { ChangeEvent } from 'react';
import { Box } from '@welcome-ui/box';
import { Shape } from '@welcome-ui/shape';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';
import { Text } from '@welcome-ui/text';
import { Checkbox } from '@welcome-ui/checkbox';
import Image from 'next/image';

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
	const optionsGroup = [
		{ label: 'No group', value: 'none' },
		{ label: 'Department', value: 'department' },
		{ label: 'Office', value: 'office' },
	];

	const optionsFilters = [
		{ label: 'Full-Time', value: 'Full-Time' },
		{ label: 'Internship', value: 'Internship' },
		{ label: 'Temporary', value: 'Temporary' },
		{ label: 'Other', value: 'Other' },
	];

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
					<Box flex="1" pr="xxs" minWidth="180px" mb="xxs">
						<Text mt="0" mb="xxs" fontSize="0.8em">
							Your dream job?
						</Text>
						<InputText placeholder="Search for a job" onChange={handleChange} isClearable />
					</Box>

					<Box maxWidth="200px" pr="xxs" minWidth="130px" flex="0.5" mb="xxs">
						<Text mt="0" mb="xxs" fontSize="0.8em">
							Group By:
						</Text>
						<Select options={optionsGroup} name="groups" value={selectGroupValues} onChange={handleSelectChange} />
					</Box>

					<Box maxWidth="200px" minWidth="160px" flex="0.5" mb="xxs">
						<Text mt="0" mb="xxs" fontSize="0.8em">
							Filter By:
						</Text>
						<Select
							isMultiple
							options={optionsFilters}
							name="filters"
							allowUnselectFromList
							disableCloseOnSelect
							onChange={handleFilterChange}
							value={selectFiltersValues}
							renderItem={(item, selected) => {
								return (
									<Box display="flex" justifyContent="flex-start" alignItems="center">
										<Box mr="xxl">
											<Checkbox type="checkbox" checked={selected} />
										</Box>
										{/* @ts-expect-error */}
										{item.label}
									</Box>
								);
							}}
							renderMultiple={() => {
								return <></>;
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
