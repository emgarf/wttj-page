'use client';
import { createTheme, WuiProvider } from '@welcome-ui/core';
import { themeOptions } from './utils/theme';

const theme = createTheme(themeOptions());

// export const metadata = {
// 	title: 'WTTJ search page',
// 	description:
// 		'A super search page where you can search and find a lot of things!',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<WuiProvider theme={theme}>
				<body>{children}</body>
			</WuiProvider>
		</html>
	);
}
