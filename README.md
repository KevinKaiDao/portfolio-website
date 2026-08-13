# Kevin Dao — Portfolio

Personal portfolio site for Kevin Dao, a fifth-year Computer Engineering student at Toronto
Metropolitan University working across software, embedded systems, and controls and automation.

**Live:** https://kevinkaidao.github.io/portfolio-website/

## Sections

- **About** — background, education and the hardware/software range behind the work.
- **Experience** — controls and commissioning co-op at ProAutomated, and autonomous rover work
  with the Toronto Autonomous Systems Collective.
- **Capabilities** — controls and automation, protocols and integration, instrumentation and
  electrical, programming languages, software and tools, engineering documentation.
- **Work** — selected projects, led by the Tank PID control system (CODESYS → OPC UA → Ignition).
- **Contact** — email, LinkedIn, GitHub and a downloadable resume.

## Built with

Plain HTML, CSS and vanilla JavaScript — no build step, no dependencies. Open `index.html` in a
browser to view it locally.

| File | Purpose |
| --- | --- |
| `index.html` | All page content and structure |
| `stylesheet.css` | Design tokens, layout and responsive rules |
| `main.js` | Mobile nav, scroll spy, scroll reveals |
| `favicon.svg` | Site icon |
| `assets/` | Resume PDF |
| `images/` | Headshot and project imagery |

The JavaScript is progressive enhancement only: with it disabled the page is still fully readable
and navigable. Animation is suppressed under `prefers-reduced-motion`.

## Editing

- **Design tokens** (colours, fonts, spacing, radii) live in the `:root` block at the top of
  `stylesheet.css`. Changing `--accent` re-themes the whole site.
- **Adding a project** — copy an existing `<article class="project-card">` block inside
  `.project-grid` in `index.html`. The grid handles the rest.
- **Capabilities** — the desktop grid is three cards across, so the six cards fill two full rows.
  If you add or remove a card, check the `@media (min-width: 1000px)` rule in the capabilities
  section of the stylesheet so no card is left stranded on its own row.
- **Resume** — replace `assets/Kevin_Dao_Resume.pdf`, keeping the filename, and every link stays
  correct.

## Deployment

Served by GitHub Pages from the repository root on the `main` branch. Pushing to `main` publishes.
