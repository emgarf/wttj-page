'use client';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
import { Text } from '@welcome-ui/text';
import { CreatedAt, WebsitesURL } from '../interface';
import { Icons } from '@welcome-ui/icons.font';
import { Modal, ModalStateReturn } from '@welcome-ui/modal';

interface Props {
	profile: string;
	recruitment: string;
	description: string;
	createdAt: CreatedAt;
	url: WebsitesURL[];
	name: string;
	onClick: any;
	modalState: ModalStateReturn;
}

export default function OfferModal({
	createdAt,
	description,
	recruitment,
	profile,
	modalState,
	url,
	name,
	onClick,
}: Props) {
	return (
		<Modal state={modalState} ariaLabel="Welcome" size="lg" tabIndex={0}>
			<Modal.Content p="xxl">
				<Modal.Header
					title={name}
					p="0"
					pr="xxl"
					mb="0"
					borderWidth="0 0 1px 0"
					borderColor="#E1E1E1"
					borderStyle="solid"
				/>

				<Modal.Body pr="0">
					<Text variant="meta2" mb="0">
						Published {createdAt.en.toLowerCase()}
					</Text>

					<Box pb="md">
						<Text
							variant="h4"
							display="flex"
							pb="sm"
							alignItems="center"
							borderWidth="0 0 1px 0"
							borderColor="#E1E1E1"
							borderStyle="solid"
						>
							<Icons.Remove color="#ffcd00" size="lg" mr="xs"></Icons.Remove>
							Job Description:
						</Text>
						<Text dangerouslySetInnerHTML={{ __html: description }} lineHeight="1.8"></Text>
					</Box>

					{recruitment?.length > 50 && (
						<Box pb="md">
							<Text
								variant="h4"
								display="flex"
								pb="sm"
								alignItems="center"
								borderWidth="0 0 1px 0"
								borderColor="#E1E1E1"
								borderStyle="solid"
							>
								<Icons.Remove color="#ffcd00" size="lg" mr="xs"></Icons.Remove>
								Recruitment process:
							</Text>
							<Text dangerouslySetInnerHTML={{ __html: recruitment }} lineHeight="1.8"></Text>
						</Box>
					)}

					{profile?.length > 50 && (
						<Box>
							<Text
								variant="h4"
								display="flex"
								pb="sm"
								mb="0"
								alignItems="center"
								borderWidth="0 0 1px 0"
								borderColor="#E1E1E1"
								borderStyle="solid"
							>
								<Icons.Remove color="#ffcd00" size="lg" mr="xs"></Icons.Remove>
								Profile wanted:
							</Text>
							<Text dangerouslySetInnerHTML={{ __html: profile }} lineHeight="1.8"></Text>
						</Box>
					)}
				</Modal.Body>

				<Modal.Footer pb="0" pl="0" pr="0">
					<Box w="100%">
						<Button variant="primary" mr="sm" as="a" href={url[0].url}>
							Apply
						</Button>

						<Button variant="secondary-info" onClick={() => onClick()}>
							Close
						</Button>
					</Box>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
}
