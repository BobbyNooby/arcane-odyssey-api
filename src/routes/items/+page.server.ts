export const load = async (): Promise<any> => {
	const response = await fetch('http://localhost:5173/items');
	const data = await response.json();

	return { data: data };
};
