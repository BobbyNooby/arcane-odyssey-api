import { json } from '@sveltejs/kit';
import db from '$lib/db';

export async function GET() {
	try {
		const data = await db
			.collection('items')
			.find({}, { projection: { _id: 0 } })
			.toArray();

		return json(data, { status: 200 });
	} catch (error) {
		return json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
