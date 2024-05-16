export const load = async (): Promise<any> => {
	const response = await fetch('https://api.arcaneodyssey.net/items');
	const data = await response.json();

	return { data: data };
};
