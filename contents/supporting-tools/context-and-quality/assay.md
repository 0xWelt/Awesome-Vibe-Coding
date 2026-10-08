---
name: "assay"
link: "https://github.com/awss1i/assay"
command: assay
---

assay is a deterministic command-line QA tool for web pages. After you write or change a page, it serves the page locally, opens it in Chromium through Playwright, drives every control it finds, and reports where the page contradicts itself. There are no tests to write and no LLM, so a run gives the same result every time and needs no API key. Install it from PyPI with pip install assay-ui (MIT, Python 3.10+), then run assay on the page.
