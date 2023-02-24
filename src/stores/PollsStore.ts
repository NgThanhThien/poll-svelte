import { supabaseClient } from '$lib/supabase';
import { writable } from 'svelte/store';

const PollStore = writable<any[]>([]);
export const loadPolls = async () => {
	const { data, error } = await supabaseClient.from('Polls').select();
	if (data) {
		console.log(data);
		PollStore.set(data);
	}
	if (error) console.log(error);
};

export const updateVote = async (payload: any) => {
	const { data, id } = payload;
	const { error } = await supabaseClient.from('Polls').update(data).eq('id', id);
	if (error)
		return {
			error: true,
			message: error
		};
	return {
		error: false
	};
};
export const deletePoll = async (id: number | string) => {
	const { error } = await supabaseClient.from('Polls').delete().eq('id', id);
	if (error)
		return {
			error: true,
			message: error
		};
	return {
		error: false
	};
};
export const addPoll = async (data: any) => {
	const { error } = await supabaseClient.from('Polls').insert(data);
	if (error)
		return {
			error: true,
			message: error
		};
	return {
		error: false
	};
};
loadPolls();
export default PollStore;
