import { createClient } from '@supabase/supabase-js';

type ContactMessage = {
  Row: {
    id: string;
    full_name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
  };
  Insert: {
    full_name: string;
    email: string;
    subject: string;
    message: string;
  };
  Update: Partial<ContactMessage['Insert']>;
  Relationships: [];
};

type Database = {
  public: {
    Tables: {
      contact_messages: ContactMessage;
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

let client: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabase() {
  if (!client) {
    client = createClient<Database>(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  }
  return client;
}

export const supabase = getSupabase();
