'use client';
import { Box } from '@welcome-ui/box';
import { InputText } from '@welcome-ui/input-text';
import { Text } from '@welcome-ui/text';

export default function Header({ handleChange }: { handleChange: ((value: any) => void) | undefined }) {
	return (
		<Box flex="1" pr="xxs" minWidth="180px" mb="xxs">
			<Text mt="0" mb="xxs" fontSize="0.8em">
				Your dream job?
			</Text>
			<InputText placeholder="Search for a job" onChange={handleChange} isClearable />
		</Box>
	);
}
