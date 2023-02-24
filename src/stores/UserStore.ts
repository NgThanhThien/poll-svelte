import { supabaseClient } from '$lib/supabase';
import { writable } from 'svelte/store';
type ISignUp = {
	email: string;
	password: string;
};
const UserStore = writable<any>(null);

export const signUp = async (payload: ISignUp) => {
	const { data, error } = await supabaseClient.auth.signUp(payload);
	if (data) {
		return {
			error: false,
			data: data
		};
	}
	if (error) throw error;
};
export const getUser = async () => {
	const { data, error } = await supabaseClient.auth.getUser();
	if (data) {
		UserStore.set(data);
	}
	if (error) {
		console.log(error);
		// getUser(null);
	}
};
export const signIn = async (payload: ISignUp) => {
	const { data, error } = await supabaseClient.auth.signInWithPassword(payload);
	if (data) {
		return {
			error: false,
			data: data
		};
	}
	if (error) throw error;
};
export const logOut = async () => {
	const { error } = await supabaseClient.auth.signOut();
	UserStore.set(null);
	if (error) throw error;
};
export default UserStore;
