export const sortById = (items: any[], selectValues?: string) => {
	if (selectValues) {
		return [...items].sort((a, b) => (a[selectValues]?.id ?? 0) - (b[selectValues]?.id ?? 0));
	} else {
		return [...items].sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0));
	}
};
