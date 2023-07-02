'use client';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
import { Text } from '@welcome-ui/text';
import { Job, WebsitesURL } from '../interface';
import { Icons } from '@welcome-ui/icons.font';
import { Link } from '@welcome-ui/link';
import { Modal, useModalState } from '@welcome-ui/modal';
import OfferModal from './modal';
import moment from 'moment';

export default function Offer({ data }: { data: Job }) {
	const {
		websites_urls,
		contract_type,
		office,
		name,
		published_at,
		created_at,
		description,
		department,
		recruitment_process,
		profile,
	} = data;

	const wttjUrl = websites_urls.filter((url: WebsitesURL) => url.website_reference === 'wttj_fr');
	const modal = useModalState();

	const onCloseModal = () => {
		modal.hide();
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="rgba(0, 0, 0, 0.1)"
			mb="xl"
			p="md"
			minWidth="100%"
			flexWrap={{ _: 'wrap', md: 'nowrap' }}
		>
			<Box p="md">
				<Modal.Trigger as={Link} {...modal}>
					<Text variant="h3" m="0">
						{name}
					</Text>
				</Modal.Trigger>

				<Box mx="0" mt="md" mb="0" display="flex" flexWrap="wrap" alignItems="center">
					<Text m="0" mr="lg" display="flex" lineHeight="25px" alignItems="center">
						<Icons.Copy mr="xxs" />
						{contract_type.en}
					</Text>

					<Text m="0" mr="lg" display="flex" lineHeight="25px" alignItems="center">
						<Icons.Map mr="xxs" />
						{office.name}
					</Text>

					<Text m="0" mr="lg" display="flex" lineHeight="25px" alignItems="center">
						<Icons.Spanner mr="xxs" />
						{department?.name ?? 'Other'}
					</Text>

					<Text m="0" display="flex" lineHeight="25px" alignItems="center">
						<Icons.Clock mr="xxs" />
						{moment(published_at).fromNow()}
					</Text>
				</Box>
			</Box>

			<Box p="md" display="flex" alignItems="center">
				<Modal.Trigger as={Button} {...modal} variant="tertiary" mr="lg">
					See more
				</Modal.Trigger>

				<Button variant="primary" as="a" href={wttjUrl[0].url}>
					Apply
				</Button>
			</Box>

			<OfferModal
				modalState={modal}
				name={name}
				createdAt={created_at}
				description={description}
				recruitment={recruitment_process}
				profile={profile}
				url={wttjUrl}
				onClick={onCloseModal}
			/>
		</Box>
	);
}
