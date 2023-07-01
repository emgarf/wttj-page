'use client';
import { useState, useEffect } from 'react';
import { Job, FetchWelcomeData } from '../interface';

export default function UseFetch(url: string) {
	const [data, setData] = useState<[] | Job[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((result: FetchWelcomeData) => {
				setLoading(false);
				setData(result?.jobs);
			})
			.catch((error) => setError(error.message))
			.finally(() => setLoading(false));
	}, [url]);

	return { data, error, loading };
}
