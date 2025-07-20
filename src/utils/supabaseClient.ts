// src/utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kocbcrctlneqqxhxowbk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvY2JjcmN0bG5lcXF4aHhvd2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNzc5MjksImV4cCI6MjA2NTk1MzkyOX0.pOL7LyfvmDAQ3IP7qzdpwyHzKaXGCJIN_t3jkx2ZoBI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
