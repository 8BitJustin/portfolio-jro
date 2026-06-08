# Justin Olson — Personal Portfolio

Personal portfolio website for Justin Olson — U.S. Air Force veteran, Systems Administrator, and data protection specialist transitioning into cybersecurity engineering.

Built with React and deployed on Vercel.

---

## Live Site

> _Add your Vercel URL here once deployed_

---

## Overview

A single-page portfolio with smooth scroll navigation covering:

- **Hero** — bio, role, and quick stats
- **Skills** — categorized competency grid across data protection, systems, security, networking, scripting, and cloud
- **Certifications Timeline** — earned, in-progress, and planned credentials with status badges
- **Projects** — live tools and production automation work with tech stack details
- **Career Roadmap** — long-range progression from Data Protection Analyst to Security Architect / CISO track
- **Contact** — LinkedIn, GitHub, location, and resume download

---

## Tech Stack

- [React](https://react.dev/) — component structure and state
- [Vercel](https://vercel.com/) — deployment
- [Google Fonts](https://fonts.google.com/) — Syne (display) + DM Sans (body)
- Vanilla CSS via inline styles and a scoped `<style>` block — no CSS framework

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
/
├── src/
│   └── portfolio.jsx    # Main single-page component
├── public/
│   └── resume.pdf       # Resume file for download link (add your own)
├── CHANGELOG.md
└── README.md
```

---

## Customization

Key data arrays are defined at the top of `portfolio.jsx` and easy to update:

| Constant | Controls |
|---|---|
| `NAV_LINKS` | Navigation items and section IDs |
| `SKILLS` | Skill category cards and tag items |
| `CERTS` | Certification timeline entries and status |
| `PROJECTS` | Project cards, tech tags, and links |
| `CAREER_STEPS` | Career roadmap nodes and cert milestones |

---

## Design

- Color palette: charcoal (`#111315`) base with ice-blue (`#4AB3E8`) accents
- Amber (`#e8a44a`) used for in-progress cert badges
- Sticky navbar with scroll-aware active section indicator
- Hover lift effects on all cards
- Responsive — collapses to hamburger menu on mobile

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

## License

Personal portfolio — not intended for template redistribution.
