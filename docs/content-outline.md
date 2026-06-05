# Personal Freelance Website Sitemap

## V1 Rule

Required pages for launch:

- Home
- Projects
- Contact
- Impressum
- Datenschutz

Everything else can come later.

## Goal

Build a simple sales-focused personal website that supports LinkedIn outreach.

Main goal:

Visitors should quickly understand:

- what I do
- who I help
- what problem I solve
- what proof I have
- how to book a call

Do not overbuild.  
No blog for V1.  
No separate About page for V1.  
No CMS.  
No WordPress.

---

# Pages

## 1. Home

URL: /

Purpose:

Main sales page.

The homepage should explain the offer, show the problem, explain what I build, show proof, and push visitors toward booking a call.

Sections:

1. Hero
2. Problem
3. What I Build
4. Offers
5. Selected Work Preview
6. How The Audit Works
7. Who This Is For / Not For
8. FAQ
9. Final CTA

Primary CTA:

Book a call

Secondary CTA:

See selected work

---

## 2. Projects

URL: /projects

Purpose:

Show proof without bloating the homepage.

Projects to include:

- Listegy
- Expensior
- Logistics Website
- Personalized Video Page System, later if built

Project format:

- Screenshot
- One-sentence problem
- One-sentence solution
- What I built
- What it proves
- Tech stack, short and optional

Example project structure:

### Listegy

Problem:
Amazon listing work often involves scattered product data, personas, keywords, prompts, and manual copy-paste.

Solution:
Listegy turns parts of that process into a structured AI-assisted workflow.

What it proves:
AI workflow thinking, e-commerce understanding, and turning prompt workflows into usable software.

Tech stack:
Laravel, Vue, Inertia, Tailwind, AI-assisted workflows

---

## 3. Contact

URL: /contact

Purpose:

Make it easy to start a conversation.

Content:

- short intro text
- Google Calendar booking link
- email address
- LinkedIn link
- optional note about what to bring to the call

Suggested text:

Bring one messy workflow. I will help you decide whether it should stay manual, stay automated, or become software.

Primary CTA:

Book a call

Secondary CTA:

Send an email

No contact form for V1 unless absolutely necessary.

---

## 4. Impressum

URL: /impressum

---

## 5. Datenschutz

URL: /datenschutz

---

# Later Pages / Routes

## 6. Personalized Video Pages

URL: /v/[slug]

Purpose:

Personalized outreach video pages.

Not needed for first website version.

Content:

- prospect name/company
- embedded video
- short message
- Google Calendar CTA
- link to main website

Tech:

- static page
- JSON data
- YouTube unlisted or Loom video
- no database in V1

# Main Navigation

Recommended V1 navigation:

- Home
- Projects
- Contact

Footer links:

- Impressum
- Datenschutz
- LinkedIn
- Email

---

# Implementation Notes

Stack:

- Astro
- Tailwind
- static output
- English and German pages
- no backend
- no CMS
- no contact form for V1

Language structure:

/ = English
/de/ = German

Do not over-engineer i18n. Duplicate pages if needed.
