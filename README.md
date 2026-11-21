# SUDHVI TECH Website

**Industry Readiness & Project Development Partner**  
*"From Campus to Career"*

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| Forms | React Hook Form + Zod |
| Animations | CSS (Intersection Observer) |
| Icons | React Icons |
| Deployment | Netlify |

---

## Getting Started

```bash
# Navigate to the project directory
cd sudhvi-tech-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── assets/          # Static assets and icons
├── components/
│   ├── ui/          # Button, Badge, SectionHeader, SubHero, CTABanner
│   ├── layout/      # Navbar, Footer, Layout
│   └── cards/       # CourseCard, ProjectCard
├── data/            # courses.ts, projects.ts (typed static data)
├── hooks/           # useScrollAnimation, useCountUp, useMediaQuery
├── lib/             # utils.ts, validators.ts (Zod schemas)
├── pages/           # Home, About, Courses, CourseDetail, Projects, Contact, Enroll, NotFound
├── styles/          # globals.css (Tailwind + custom variables)
├── types/           # course.types.ts, project.types.ts
└── App.tsx          # Router configuration
```

---

## Placeholders to Fill

Before going live, replace these placeholders with genuine business information:

| Placeholder | Location | Description |
|------------|----------|-------------|
| `[PLACEHOLDER: Phone Number]` | Footer, Contact | Official phone number |
| `[PLACEHOLDER: Email Address]` | Footer, Contact | Official business email |
| `[PLACEHOLDER: WhatsApp Number]` | Footer, Contact | Official WhatsApp business line |
| `[PLACEHOLDER: Office Address]` | Footer, Contact | Full registered physical address |
| `[PLACEHOLDER: Office Hours]` | Contact | Operating hours (e.g. Mon-Sat 9am-7pm) |
| `[PLACEHOLDER: Founder Name]` | About | Founder full name |
| `[PLACEHOLDER: Founder Title]` | About | Founder designation / credentials |
| `[PLACEHOLDER: Year Founded]` | About | Year of establishment |
| `[PLACEHOLDER: Founder Quote]` | About | Personal statement/vision message |
| `[PLACEHOLDER: Google Maps]` | Contact | Google Maps iframe embed URL |

---

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Configure environment variables from `.env.example`

---

© SUDHVI TECH. All rights reserved.
