'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { createTheme, WuiProvider } from '@welcome-ui/core';
import { Button } from '@welcome-ui/button';

const inter = Inter({ subsets: ['latin'] });
const theme = createTheme();

// export const metadata = {
// 	title: 'WTTJ search page',
// 	description:
// 		'A super search page where you can search and find a lot of things!',
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<WuiProvider
				theme={theme}
				hasGlobalStyle
			>
				<body className={inter.className}>
					{children}
					<Button variant="secondary">Welcome!</Button>
				</body>
			</WuiProvider>
		</html>
	);
}
