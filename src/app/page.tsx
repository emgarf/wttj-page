'use client';
import styles from './page.module.css';
import { Box } from '@welcome-ui/box';
import Offer from './components/offer';

export default function Home() {
	return (
		<main className={styles.main}>
			<Box
				display="flex"
				w="100%"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
			>
				<Offer></Offer>
				<Offer></Offer>
				<Offer></Offer>
				<Offer></Offer>
			</Box>
		</main>
	);
}
