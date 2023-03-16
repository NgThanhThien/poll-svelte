import { supabaseClient } from '$lib/supabase';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: any }) {
	const { id } = params;
	const { data, error: err } = await supabaseClient.from('Polls').select().eq('id', id);
	if (data) return data[0];
	if (err) {
		throw error(404, 'Not found');
	}
}
