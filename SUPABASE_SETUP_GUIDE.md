# Supabase Contact Form Setup Guide

## Issue: Form Not Submitting

The console error shows an empty error object `{}`, which typically indicates a **Row Level Security (RLS)** issue in Supabase.

## Quick Fix Checklist

### 1. Check Your Supabase Table Exists

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/ygdwoneypnyholzgrjfd
2. Navigate to **Table Editor** in the left sidebar
3. Look for a table named **`contact`**

If it doesn't exist, create it with this structure:

```sql
CREATE TABLE contact (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  number text NOT NULL,
  description text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### 2. Enable Row Level Security (RLS) Policies

**This is the most common issue!**

The table needs to allow anonymous users to INSERT data. Run these SQL commands in your Supabase SQL Editor:

```sql
-- Enable RLS on the contact table
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into the contact table
CREATE POLICY "Allow public inserts on contact table"
ON contact
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Allow anyone to read their own submissions
CREATE POLICY "Allow users to read contact entries"
ON contact
FOR SELECT
TO anon
USING (true);
```

### 3. Verify Column Names Match

Make sure your table has these exact column names:
- `name` (text)
- `email` (text)
- `number` (text) ← **Note: Your form sends "phone" but table expects "number"**
- `description` (text)

### 4. Test Your Setup

After making the changes above:

1. Start your dev server: `npm run dev`
2. Open the browser console (F12)
3. Fill out the contact form
4. Submit and check the console for detailed error messages

The improved error logging will now show:
- Exact error message
- Error code
- Hints from Supabase

## Common Error Messages & Solutions

### "new row violates row-level security policy"
**Solution:** Run the RLS policy SQL commands above

### "relation 'contact' does not exist"
**Solution:** Create the table using the SQL above

### "column 'X' does not exist"
**Solution:** Verify your table columns match exactly: name, email, number, description

## Testing in Supabase Dashboard

You can test if your policies work by:

1. Go to **Table Editor** → `contact` table
2. Click **Insert row**
3. Try to manually add a row
4. If it works, the form should work too!

## Still Not Working?

Check the browser console after submitting the form. The new error logging will display:
```
Supabase error: [error object]
Error details: {
  message: "...",
  details: "...",
  hint: "...",
  code: "..."
}
```

Share this error information to get more specific help.
