import { sortById } from '../utils/utils';

describe('sortById', () => {
	it('should sort items by id in ascending order', () => {
		const items = [
			{ id: 2, value: 'Item 2' },
			{ id: 1, value: 'Item 1' },
			{ id: 3, value: 'Item 3' },
		];

		expect(sortById(items)).toEqual([
			{ id: 1, value: 'Item 1' },
			{ id: 2, value: 'Item 2' },
			{ id: 3, value: 'Item 3' },
		]);
	});

	it('should sort items by id in ascending order targetting the "city" attribute', () => {
		const items = [
			{ id: 2, city: { id: 3, value: 'Item 2' } },
			{ id: 1, city: { id: 1, value: 'Item 1' } },
			{ id: 3, city: { id: 2, value: 'Item 3' } },
		];

		expect(sortById(items, 'city')).toEqual([
			{ id: 1, city: { id: 1, value: 'Item 1' } },
			{ id: 3, city: { id: 2, value: 'Item 3' } },
			{ id: 2, city: { id: 3, value: 'Item 2' } },
		]);
	});

	it('should keep the same value if one of the parametters are incorrect', () => {
		const items = [
			{ id: 2, city: { id: 3, value: 'Item 2' } },
			{ id: 1, city: { id: 1, value: 'Item 1' } },
			{ id: 3, city: { id: 2, value: 'Item 3' } },
		];

		expect(sortById(items, 'department')).toEqual([
			{ id: 2, city: { id: 3, value: 'Item 2' } },
			{ id: 1, city: { id: 1, value: 'Item 1' } },
			{ id: 3, city: { id: 2, value: 'Item 3' } },
		]);

		expect(sortById([], 'department')).toEqual([]);
	});
});
