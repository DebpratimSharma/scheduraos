// Supabase User Type
export type User = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
  [key: string]: unknown;
};

// Supabase Session Type
export type Session = {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  expires_at?: number;
  token_type: string;
  user: User;
};

// User Settings Type
export type UserSettings = {
  user_id: string;
  working_days?: string[];
  holidays?: string[];
  [key: string]: unknown;
};

// Common API Response Type
export type ApiResponse<T> = {
  data?: T;
  error?: string | null;
};
