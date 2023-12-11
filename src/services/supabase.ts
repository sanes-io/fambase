import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://efxfkdqmtclnrnrjyhqd.supabase.co';
// eslint-disable-next-line no-undef
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
