// See https://kit.svelte.dev/docs/types#app

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit';

// for information about these interfaces
declare global {
	declare namespace App {
		// interface Error {}
		// interface Locals {
		// 	sb: TypedSupabaseClient;
		// 	session: Session | null;
		// }
		// interface PageData {
		// 	session: import('@supabase/supabase-js').Session | null;
		// }
		// interface Platform {}
	}
}
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}
export {};
