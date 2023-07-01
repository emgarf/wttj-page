'use client';
import { createTheme, WuiProvider } from '@welcome-ui/core';

const theme = createTheme({
	colors: {
		primary: {
			100: '#FFF8D9',
			200: '#FFE166',
			500: '#FFCD00',
			600: '#E5B800',
			700: '#997B00',
			800: '#735C00',
			900: '#4C3D00',
		},
	},
	links: {
		primary: {
			default: {
				background: 'none',
			},
			hover: {
				color: '#FFCD00',
			},
		},
	},
});

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
