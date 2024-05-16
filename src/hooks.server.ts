import { connectMongo } from '$lib/db';

connectMongo().then(() => {
	console.log('Connected to MongoDB...');
});
