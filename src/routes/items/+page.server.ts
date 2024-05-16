export const load = async (): Promise<{ data: any[] } | { error: string }> => {
	try {
		const response = await fetch('http://api.arcaneodyssey.net/items');
		const data = await response.json();

		if (response.status !== 200) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		return { data };
	} catch (error) {
		console.log(error);
		return { error: 'Internal Server Error' };
	}
};
