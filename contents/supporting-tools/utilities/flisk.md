---
name: "Flisk"
link: "https://github.com/flisk-sh/flisk"
command: "flisk"
---

CLI that takes an empty folder to a running local stack in one command: it autodetects your app, then generates and orchestrates the infrastructure around it (Docker Compose, Tilt/Tiltfile, Traefik, databases) instead of letting the model hand-edit Dockerfiles and configs. Written so agents can drive it — you write application logic, Flisk owns the local environment (MIT, TypeScript, npm `@flisk-sh/flisk`, no account needed).
