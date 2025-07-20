import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sign up with email and password
export async function signUp(email: string, password: string) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { user, error };
}

// Sign in with email and password
export async function signIn(email: string, password: string) {
  const { user, error, session } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user, error, session };
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Get current user
export function getCurrentUser() {
  return supabase.auth.getUser();
}
