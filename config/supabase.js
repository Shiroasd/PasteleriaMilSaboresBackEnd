const { createClient } = require('@supabase/supabase-js');

// Crear cliente Supabase usando variables de entorno definidas en .env o en Vercel
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = { supabase };
