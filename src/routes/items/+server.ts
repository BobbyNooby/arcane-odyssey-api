import { json } from '@sveltejs/kit';
import db from '$lib/db';

const corsHeaders = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'GET'
};

export async function GET() {
	try {
		const data = await db
			.collection('items')
			.find({}, { projection: { _id: 0 } })
			.toArray();

		console.log(data);
		return json(data, {
			headers: corsHeaders,
			status: 200
		});
	} catch (error) {
		return json({ error: 'Internal Server Error' }, { status: 500, headers: corsHeaders });
	}
}
