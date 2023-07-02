'use client';
import { createTheme, WuiProvider } from '@welcome-ui/core';
import { themeOptions } from './utils/theme';

const theme = createTheme(themeOptions());

export default function BodyLayout({ children }: { children: React.ReactNode }) {
	return (
		<WuiProvider theme={theme}>
			<body>{children}</body>
		</WuiProvider>
	);
}
