import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://epijmtrdsclqyqecortf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaWptdHJkc2NscXlxZWNvcnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4OTI0NzIsImV4cCI6MjA5MDQ2ODQ3Mn0.JvUQSFUJhD9NblhGxcYvMtQOg0umXNzZQwUnIhLtgjA';

export const supabase = createClient(supabaseUrl, supabaseKey)