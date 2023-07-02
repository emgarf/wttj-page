import BodyLayout from './body';

export const metadata = {
	title: 'WTTJ search page',
	description: 'A super search page where you can search and find a lot of things!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<BodyLayout>{children}</BodyLayout>
		</html>
	);
}
