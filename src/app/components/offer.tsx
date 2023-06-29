'use client';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
import { Text } from '@welcome-ui/text';
import { WebsitesURL } from '../interface';
import { Icons } from '@welcome-ui/icons.font';

interface Props {
	name: string;
	officeName: string;
	contractType: string;
	websitesUrls: WebsitesURL[];
}

export default function Offer({ name, officeName, contractType, websitesUrls }: Props) {
	const wttjUrl = websitesUrls.filter((url) => url.website_reference === 'wttj_fr');

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="rgba(0, 0, 0, 0.1)"
			borderRadius="sm"
			margin="sm"
			minWidth="100%"
		>
			<Box p="md">
				<Text
					variant="h3"
					m="0"
				>
					{name}
				</Text>
				<Box
					mx="0"
					mt="md"
					mb="0"
					display="flex"
					alignItems="center"
				>
					<Text
						m="0"
						mr="lg"
						display="flex"
						alignItems="center"
					>
						<Icons.Copy mr="xxs" />
						{contractType}
					</Text>
					<Text
						m="0"
						display="flex"
						alignItems="center"
					>
						<Icons.Map mr="xxs" />
						{officeName}
					</Text>
				</Box>
			</Box>
			<Box
				p="md"
				display="flex"
				alignItems="center"
			>
				<Button
					variant="tertiary"
					mr="lg"
				>
					See more
				</Button>
				<Button
					variant="secondary"
					as="a"
					href={wttjUrl[0].url}
				>
					Apply
				</Button>
			</Box>
		</Box>
	);
}
