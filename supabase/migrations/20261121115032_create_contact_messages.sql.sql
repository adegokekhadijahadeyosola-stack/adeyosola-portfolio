/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — visitor's full name from the contact form
  - `email` (text, not null) — visitor's email address for reply
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — message body
  - `created_at` (timestamp) — when the message was submitted
2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT only to `anon` and `authenticated` — visitors can only send
  messages; nobody can read them back through the public website.
3. Notes
- Single-tenant portfolio with no sign-in; the table only accepts new
  messages, so the single INSERT policy is the full intended access model.
- Policies are written per-verb (no FOR ALL) per security convention.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can send a contact message" ON contact_messages;
CREATE POLICY "Anyone can send a contact message"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
