# Awesome-Vibe-Coding

[![Website](https://img.shields.io/website?url=https%3A%2F%2F0xWelt.github.io%2FAwesome-Vibe-Coding%2F&label=Live%20Site)](https://0xWelt.github.io/Awesome-Vibe-Coding/)
[![GitHub stars](https://img.shields.io/github/stars/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding)
[![GitHub forks](https://img.shields.io/github/forks/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding/fork)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A Curated List of Vibe Coding Open-Source Projects, Tools, and Learning Resources

🌐 **Live Website**: [https://0xWelt.github.io/Awesome-Vibe-Coding/](https://0xWelt.github.io/Awesome-Vibe-Coding/)

![Awesome-Vibe-Coding](docs/Awesome-Vibe-Coding.png)

> **Content structure**: tools are organized in the [`contents/`](contents/) directory — one
> markdown file per tool, grouped by category and subcategory, with `_meta.md`
> files describing each folder. The live website is generated from these files
> by `yaal/scripts/parse-readme.js`.
## Architecture

The vibe coding ecosystem, from running agents to the services they operate, the
capabilities that extend them, and what they produce.

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
        H8["General Capabilities"]
    end

    subgraph platforms["🌐 Platforms — services agents operate"]
        direction LR
        P1["Code Hosting"]
        P2["Collaboration & IM"]
        P3["Cloud Platforms"]
        P4["Containers & Orchestration"]
        P5["Hosting & PaaS"]
        P6["Project & Task Management"]
    end

    subgraph capabilities["🔌 Harness Extensions"]
        direction LR
        C1["MCP Servers"]
        C2["Agent Skills"]
        C3["Development Standards"]
    end

    Comm["✨ Vibe Coding Communities"]
    Proj["📦 Awesome Projects"]
    Learn["📚 Awesome Learning Resources"]

    subgraph support["🧰 Supporting Tools — non-platform tools"]
        direction LR
        S1["Agent Observability"]
        S2["Context & Code Quality"]
        S3["Utilities"]
    end

    Dev --> harnesses
    harnesses -->|operates| platforms
    harnesses -->|extended by| capabilities
    harnesses -->|builds & shares in| Comm
    harnesses -->|produces| Proj
    support -.->|supports| harnesses
    Learn -.->|teaches| Dev
```

## Categories


| Category | Description | Location |
| --- | --- | --- |
| Harnesses | Tools that run AI coding agents — terminal CLIs, standalone IDEs, IDE extensions, web-based IDEs, cloud agents, mobile apps, SDKs, and their general capabilities (plan, goal, compact, PTC, hooks). | [contents/harnesses/](contents/harnesses/) |
| Vibe Coding Communities | Create apps with AI and share them with the community — AI app builders and remixable creation platforms. | [contents/vibe-coding-community/](contents/vibe-coding-community/) |
| Platforms | Platforms that provide services — code hosting, collaboration, cloud, hosting, project and task management — together with the CLIs (gh, glab, aws, lark-cli) that operate them. | [contents/platforms/](contents/platforms/) |
| Harness Extensions | What extends coding agents beyond the box — standards & protocols (AGENTS.md, MCP, ACP, Skills), MCP servers, and agent skills. | [contents/harness-extensions/](contents/harness-extensions/) |
| Supporting Tools | Non-platform tools that support agent workflows — observability, context preparation, code quality, and specialized utilities. | [contents/supporting-tools/](contents/supporting-tools/) |
| Awesome Projects | Projects created through vibe coding. | [contents/awesome-projects/](contents/awesome-projects/) |
| Awesome Learning Resources | Essential courses and educational resources to master vibe coding. | [contents/awesome-learning-resources/](contents/awesome-learning-resources/) |

## Adding a Tool

To add a tool, create a markdown file in the matching `contents/` folder:

```markdown
---
name: Tool Name
link: https://example.com
command: tool-cmd        # optional
---

Short description of the tool.
```

The tool is picked up automatically when the website builds. Prefer adding a
separate file over editing an existing one — it keeps PRs small and conflict-free.

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
