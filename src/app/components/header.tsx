'use client';
import { ChangeEvent } from 'react';
import { Box } from '@welcome-ui/box';
import { Shape } from '@welcome-ui/shape';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';
import Image from 'next/image';

export default function Header({
	selectValues,
	handleChange,
	handleSelectChange,
}: {
	selectValues: string;
	handleChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
	handleSelectChange: ((value: any) => void) | undefined;
}) {
	const options = [
		{ label: 'All', value: 'none' },
		{ label: 'Department', value: 'department' },
		{ label: 'Office', value: 'office' },
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
				<Box display="flex" w="100%">
					<Box w="100%" pr="lg" minWidth="180px">
						<InputText placeholder="Search for a job" onChange={handleChange} isClearable />
					</Box>
					<Select
						w="100%"
						options={options}
						maxWidth="200px"
						name="filters"
						value={selectValues}
						onChange={handleSelectChange}
					/>
				</Box>
			</Box>
		</Box>
	);
}
