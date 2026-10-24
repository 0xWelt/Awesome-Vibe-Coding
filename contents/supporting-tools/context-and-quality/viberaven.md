---
name: "VibeRaven"
link: "https://github.com/ohad6k/VibeRaven"
command: "npx -y viberaven check"
---

VibeRaven is an open-source CLI that checks AI-built apps on Vercel + Supabase for launch gaps before you ship: tables created without row level security, permissive policies such as `using (true)`, service_role keys in client code or client-prefixed env variables, security definer functions the anon key can call, a direct database port where the transaction pooler is needed, and unverified Stripe webhooks. It reads the repository and its migrations on your machine, needs no account, and names the file and line for each gap. It is a repository check, not a live database test or a full security audit (MIT, Node 20+).
