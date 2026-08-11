import { useState, useEffect } from "react";
export function useWeather(code) {
	// const API = `https://weather.tsukumijima.net/api/forecast/city/${code}`;
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {

		if (!code) return;

		const fetchWeather = async () => {
			setLoading(true);
			setError(null);

			try {
				const res = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${code}`);

				if (!res.ok) {
					throw new Error(`HTTP ${res.status}`);
				}

				const data = await res.json();
				setWeather(data);
			} catch (error) {
				setError('天気の取得に失敗しました。もう一度お試しください');
			} finally {
				setLoading(false);
			}
		}

		fetchWeather();
	}, [code]);

	return { weather, loading, error };

	
}