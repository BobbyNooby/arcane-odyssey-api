export const load = async (): Promise<
	{ randomData: any[]; allData: any[] } | { error: string }
> => {
	try {
		const response = await fetch('https://api.arcaneodyssey.net/items', { method: 'GET' });
		const data = await response.json();

		if (response.status !== 200) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		let finalData: any[] = [];

		const validMainTypes = [
			'Accessory',
			'Chestplate',
			'Pants',
			'Enchant',
			'Modifier',
			'Gem',
			'Cannon',
			'Deckhand'
		];

		for (const mainType of validMainTypes) {
			const filteredData = data.filter((item) => item.mainType === mainType);

			const randomNumber = Math.floor(Math.random() * 3) + 2;

			for (let i = 0; i < randomNumber; i++) {
				const randomIndex = Math.floor(Math.random() * filteredData.length) - 1;
				const randomItem = filteredData[randomIndex];

				if (randomItem) {
					finalData.push(randomItem);
				}
			}
		}

		return { randomData: finalData, allData: data };
	} catch (error) {
		console.log(error);
		return { error: 'Internal Server Error' };
	}
};
