'use client';
import { Box } from '@welcome-ui/box';
import { Select } from '@welcome-ui/select';
import { Text } from '@welcome-ui/text';
import { optionsGroup } from '../utils/constants';

export default function FilterBy({
	selectGroupValues,
	handleSelectChange,
}: {
	selectGroupValues: string;
	handleSelectChange: ((value: any) => void) | undefined;
}) {
	return (
		<Box maxWidth="200px" pr="xxs" minWidth="130px" flex="0.5" mb="xxs">
			<Text mt="0" mb="xxs" fontSize="0.8em">
				Group By:
			</Text>
			<Select options={optionsGroup} name="groups" value={selectGroupValues} onChange={handleSelectChange} />
		</Box>
	);
}
