import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL as string;
// eslint-disable-next-line no-undef
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
