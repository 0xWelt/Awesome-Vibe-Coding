---
name: "SealMyApp"
link: "https://sealmyapp.com/"
---

SealMyApp is a read-only security scan for deployed apps built with Lovable, Bolt, Cursor, Replit and v0. It only scans an app after you prove you own it, with a DNS TXT record or a `.well-known` file. It then checks for Supabase tables that can be read without signing in, open Firebase rules, secret API keys in the JavaScript bundle, exposed `.env` and `.git` files, and admin routes without login. Row data is never stored; it records only table and column names. The scan and two tools are free: an in-browser key checker and SQL to audit Supabase Row Level Security. Paid tiers add fix prompts written for the builder you used, a re-scan to confirm each fix, and daily monitoring.
