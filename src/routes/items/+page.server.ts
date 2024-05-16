export const load = async (): Promise<any> => {
	const response = await fetch('http://api.arcaneodyssey.net/items');
	const data = await response.json();

	return { data: data };
};
