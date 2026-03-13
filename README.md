<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Fremi – Maskinentreprenør (Redesign)

Single-page redesign for [Fremi](https://www.fremi.no/). Built with **React**, **Vite**, and **Tailwind CSS**.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

## Optional Note – Design Decisions, Improvements & AI Tools

### Design decisions

- Defined a clear hero with a short headline (“Kraft / Presisjon / Tillit”), the existing tagline, one supporting paragraph, and two primary CTAs so the value proposition is obvious at a glance.
- Chose a limited palette (orange, dark, light) and clear typography (Syne for headings, JetBrains Mono for labels, Inter for body) for a consistent, professional look.
- Turned the four services into image cards with icons and hover-reveal descriptions so the same content is easier to scan than long paragraphs.
- Put trust and contact in the hero (stats + “Hovedkontor – Skodje”) so visitors see credibility and how to get in touch without scrolling.
- Used a fixed navbar that changes on scroll and a full-screen mobile menu with large tap targets so navigation works well on all devices.

### What you improved (vs. original fremi.no)

- **Hierarchy** — Replaced long headline blocks with a structured hero and clear section order (hero → marquee → services → about → contact → footer).
- **Services** — Same four services and text, but presented as visual cards with images and CTAs instead of plain headings and paragraphs.
- **About** — Same “Velkommen til Fremi!” and value points, but with a strong image, “100% Kvalitetsgaranti” badge, and bordered value boxes for quicker scanning.
- **Contact** — Kept all contact info; added an embedded map and a simple form (name, email, service, message) in a two-column layout so everything is in one place.
- **Responsiveness** — Layout and type scale correctly on mobile, tablet, and desktop so the site is usable on any device.
- **Polish** — Scroll progress bar, light entrance/hover animations, and a subtle texture overlay to make the site feel more finished without changing the content.

### AI tools used (and how)

- **Cursor (AI-assisted editor)** — Used for implementation speed: generating and editing React components, refactoring into a component structure (Navbar, Hero, Marquee, Services, About, Contact, Footer), fixing layout and styling (e.g. overlapping elements), and wiring Tailwind classes. Design choices and all content came from me; the AI helped with structure and code so the result stayed clean and maintainable.
