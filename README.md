# prithviportfolio.com

Personal site for Prithvi Sairaj Krishnan — ECE at UT Austin.

The deployed site is a single self-contained `index.html` at the repo root.
No build step, no dependencies, no framework. Fonts come from Google Fonts;
the portrait is embedded as a data URI.

## Layout

| Path | What it is |
|---|---|
| `index.html` | The site. Edit this. |
| `Prithvi-Krishnan-Resume.pdf` | Linked from the masthead and the close. |
| `design/` | The three direction boards the design was chosen from. Not deployed. |
| `react-port/` | Dormant Vite + React scaffold, plus `src/data/record.ts`, which is the content source of truth if the site is ever rebuilt as components. Not deployed. |

## Run it

Open `index.html` in a browser. That is the whole workflow.

For a server (only needed if you want clean URLs locally):

    python -m http.server 8080

## Deploy

Vercel serves the repo root as a static site — there is no `package.json` at
root, so no build is attempted. `.vercelignore` keeps `design/` and
`react-port/` off the public web. Pushing to `main` redeploys.

## House rule for content

Every claim on the page that asserts something verifiable carries its
identifier and links to the primary source — patent number, IEEE document id,
DOI, repository. Anything that cannot be sourced is written as a plain
description, never as a metric.
