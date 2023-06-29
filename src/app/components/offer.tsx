'use client';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
import { Text } from '@welcome-ui/text';

export default function Offer() {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			backgroundColor="nude-100"
		>
			<Box
				backgroundColor="light-800"
				borderRadius="sm"
				boxShadow="sm"
				margin="xl"
			>
				<Box p="md">
					<Text m="0">job.name</Text>
					<Text m="0">job.contract_type.en</Text>
					<Text m="0">job.office.name</Text>
				</Box>

				<Button>See more</Button>
				<Button variant="secondary">Apply</Button>
			</Box>
		</Box>
	);
}
