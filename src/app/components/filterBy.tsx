'use client';
import { Box } from '@welcome-ui/box';
import { Select } from '@welcome-ui/select';
import { Text } from '@welcome-ui/text';
import { Checkbox } from '@welcome-ui/checkbox';
import { optionsFilters } from '../utils/constants';

export default function Header({
	selectFiltersValues,
	handleFilterChange,
}: {
	selectFiltersValues: undefined | string[];
	handleFilterChange: any;
}) {
	return (
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
	);
}
