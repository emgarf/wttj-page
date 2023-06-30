'use client';
import { useState, useEffect } from 'react';
import { Job } from '../interface';

export default function UseFetch(url: string) {
	const [data, setData] = useState<[] | Job[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				setLoading(false);
				setData(result?.jobs);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [url]);

	return { data, error, loading };
}
