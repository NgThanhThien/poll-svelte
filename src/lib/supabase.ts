import { createClient } from '@supabase/supabase-js';
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const projectUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
export const supabaseClient = createClient(projectUrl, anonKey);
