# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [3.0.2] - 2026-07-21

### Changed
- Experience card expanded layout: Technologies and Highlights now stack
  vertically below the narrative paragraph instead of side-by-side columns

### Fixed
- Section subtitle paragraphs now centered across all sections (Experience,
  Skills, Projects, Certifications, Current Focus, Contact)

## [3.0.1] - 2026-07-21

### Fixed
- Hero bio paragraph now centered horizontally to match name and buttons

## [3.0.0] - 2026-07-20

### Added
- ExperienceCard accordion component — each role collapses to a summary bar
  and expands to show full narrative, Technologies, and Highlights
- System Administrator role fully populated with detailed narrative,
  technology stack, and highlights
- Placeholder narrative for Service Delivery Manager, Rubrik Administrator,
  Deskside Support Technician, and QA Automation Engineer (to be updated)

### Changed
- Experience section rebuilt from flat bullet list to accordion card layout
- Expanded content structure: each role now supports multi-paragraph narrative,
  tech stack tags, and highlight bullets independently

## [2.0.7] - 2026-06-08

### Added
- Created a 'View Github' link for projects that have one. Included github link for each relevant item within the
  Projects array

### Changed
- Expanded project descriptions for Job Application Tracker, AZ-104 Exam Prep Tool,
  AZ-104 Lab Environment, and BDSR Automation to better reflect context, problem
  solved, and implementation detail

## [2.0.6] - 2026-06-08

### Changed
- Contact chips: text and icon centered within each card
- LinkedIn and GitHub chips now link to their respective profiles
- GitHub handle updated to 8BitJustin
- Resume download button wired to /public/resume.pdf

## [2.0.5] - 2026-06-08

### Changed
- Adjusted text all across site

## [2.0.4] - 2026-06-08

### Changed
- Contact cards, centered information

## [2.0.3] - 2026-06-08

### Changed
- Experience card date alignment, pushed to right side of card
- Placed 'Justin' and 'Olson.' on same line

### Removed
- Bullet icons within Experience section, removed (HTML and CSS)

## [2.0.2] - 2026-06-08

### Changed
- Contact cards layout: centered full-width equal columns

## [2.0.1] - 2026-06-08

### Changed
- Centering: P tags for About, Experience, Skills, Projs, Certs, Focus, Contact
- Centering: Buttons in About and Resume centered

## [2.0.0] - 2026-06-08

### Added
- Experience section with all five roles (System Administrator, Service Delivery
  Manager, Rubrik Administrator, Deskside Support Technician, QA Automation Engineer)
- Imaging Station added to Projects section
- Current Focus section replacing Career Roadmap — five active development areas
  (Linux Administration, Python Automation, Azure Infrastructure, Enterprise Backup
  Engineering, Security Operations)
- Linux+ added to Certifications as In Progress
- Full mobile responsiveness across all sections and grids

### Changed
- Navigation restructured: About, Experience, Skills, Projects, Certifications,
  Current Focus, Contact
- Hero section: removed stat metrics block, centered layout corrected
- All section eyebrow labels removed (e.g. "The Long Game", "Built Things")
- Career Roadmap removed in favor of Current Focus

### Removed
- Cert sprint / enterprise environment / problems solved stat counters from hero
- Career Roadmap / long-term progression section

## [1.0.1] - 2026-06-07

### Changed
- Replaced Syne and DM Sans fonts with Roboto across the entire site

## [1.0.0] - 2026-06-07

### Added
- Initial release of personal portfolio site
- Sticky navbar with active section tracking and smooth scroll navigation
- **Hero section** — name, title, bio, call-to-action buttons, and stat counters
- **Skills section** — six categorized skill cards covering Data Protection, Systems & Virtualization, Security & Compliance, Networking, Scripting & Automation, and Cloud & Emerging
- **Certifications Timeline** — full timeline of earned certifications (A+, Network+, CCNA, RCSA, Security+), in-progress certs (PCAP, AZ-104), and planned future credentials (CySA+, AZ-500, CISSP/CISM) with color-coded status badges
- **Projects section** — four project cards with descriptions, tech stack tags, and live links where applicable (Job Application Tracker, AZ-104 Exam Prep Tool, AZ-104 Lab Environment, BDSR Automation)
- **Career Roadmap section** — vertical timeline mapping the progression from Data Protection Analyst through Senior Security Engineer to Security Architect / CISO track, with cert milestones at each stage
- **Contact section** — LinkedIn, GitHub, and location chips; resume download button; references note
- Footer with name, role summary, and location
- Responsive layout with mobile hamburger menu
- Charcoal / steel / ice-blue color scheme throughout
- Google Fonts: Syne (display) + DM Sans (body)
- Scroll-driven active nav link highlighting
- Hover animations on cards and buttons
