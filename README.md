# Awesome-Vibe-Coding

[![Website](https://img.shields.io/website?url=https%3A%2F%2F0xWelt.github.io%2FAwesome-Vibe-Coding%2F&label=Live%20Site)](https://0xWelt.github.io/Awesome-Vibe-Coding/)
[![GitHub stars](https://img.shields.io/github/stars/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding)
[![GitHub forks](https://img.shields.io/github/forks/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding/fork)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of vibe coding harnesses, communities, learning resources, and projects.

🌐 **Live Website**: [https://0xWelt.github.io/Awesome-Vibe-Coding/](https://0xWelt.github.io/Awesome-Vibe-Coding/)

![Awesome-Vibe-Coding](docs/Awesome-Vibe-Coding.png)

> **Content structure**: entries are organized in the [`contents/`](contents/) directory — one
> markdown file per entry, grouped by category and subcategory, with `_meta.md`
> files describing each folder. The live website is generated from these files
> by `yaal/scripts/parse-readme.js`.

Supporting tools and services — MCP servers, agent skills, CLIs, deploy and cloud platforms, and observability — belong in [Awesome-Agent-Services](https://github.com/0xWelt/Awesome-Agent-Services). Each product is listed in one repository.

## Architecture

Coding harnesses run the agent. Communities, projects, and learning resources are what people build, share, and study with them. The tools and services an agent calls are collected in Awesome-Agent-Services.

```mermaid
flowchart TB
    Dev["👤 Developer"]

    subgraph harnesses["🖥 Harnesses — run coding agents"]
        direction LR
        H1["Terminal CLIs"]
        H2["Standalone IDEs"]
        H3["IDE Extensions"]
        H4["Web-based IDEs"]
        H5["Cloud-based Agents"]
        H6["Mobile Harnesses"]
        H7["Agent SDKs"]
        H8["General Capabilities & Standards"]
    end

    Comm["✨ Vibe Coding Communities"]
    Proj["📦 Awesome Projects"]
    Learn["📚 Awesome Learning Resources"]
    AAS["🧰 Awesome Agent Services"]

    Dev --> harnesses
    harnesses -->|builds & shares in| Comm
    harnesses -->|produces| Proj
    Learn -.->|teaches| Dev
    harnesses -.->|calls| AAS
```

## Categories

| Category | Description | Location |
| --- | --- | --- |
| Harnesses | Tools that run AI coding agents — terminal CLIs, standalone IDEs, IDE extensions, web-based IDEs, cloud agents, mobile apps, SDKs, and their general capabilities (plan, goal, compact, PTC, hooks, standards & protocols). | [contents/harnesses/](contents/harnesses/) |
| Vibe Coding Communities | Create apps with AI and share them with the community — AI app builders and remixable creation platforms. | [contents/vibe-coding-community/](contents/vibe-coding-community/) |
| Awesome Projects | Projects created through vibe coding. | [contents/awesome-projects/](contents/awesome-projects/) |
| Awesome Learning Resources | Essential courses and educational resources to master vibe coding. | [contents/awesome-learning-resources/](contents/awesome-learning-resources/) |

## Adding an entry

To add a coding harness, vibe coding community, learning resource, or vibe-coded project, create a markdown file in the matching `contents/` folder:

```markdown
---
name: Tool Name
link: https://example.com
---

Short description of the entry.
```

Leave out a `command` field. Put MCP servers, agent skills, CLIs, deploy and cloud platforms, observability, and other supporting tools and services in [Awesome-Agent-Services](https://github.com/0xWelt/Awesome-Agent-Services). The entry is picked up automatically when the website builds. Prefer adding a separate file over editing an existing one — it keeps PRs small and conflict-free.

## Repo Status

![Alt](https://repobeats.axiom.co/api/embed/4b9660ab5b37e6ebaa2f2e036eea18e08787410d.svg "Repobeats analytics image")

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/0xWelt/Awesome-Vibe-Coding/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=0xWelt/Awesome-Vibe-Coding" />
</a>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=0xWelt/Awesome-Vibe-Coding&type=Date)](https://star-history.com/#0xWelt/Awesome-Vibe-Coding&Date)

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a
[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
