# Architecture Overview – Ziff's Portfolio

## Frontend Stack
- Next.js (App Router)
- Tailwind CSS
- ShadCN UI (for cards, layout primitives)
- Cursor MCP (for syncing with Figma)
- Supabase (CMS for project content)
- Vercel (hosting)

## Component System

### [✔] ServiceCard
- Hardcoded
- Includes: Title, Role, Tagline, Summary, "Questions We Explore", "Things We Might Do", "Ideal For", CTA links

### [✔] ProjectCard (5 variants)
- Data-driven
- Each project row has multiple cards (swipeable)
- Variant rendered conditionally based on type

## Pages

### Landing Page
- Hero intro
- 4 service cards
- Testimonials (optional)

### /[service] (4 total)
- Short intro (name, title, visual)
- Project gallery with horizontal swipes
- CTA or email links

## CMS – Supabase

### Table: `projects`
| Field             | Type       |
|------------------|------------|
| id               | UUID       |
| service_type     | string     | // 'futures', 'facilitation', etc.
| variant_index    | int        | // order in row
| overline         | string     |
| title            | string     |
| hmw_line         | string     |
| description      | text       |
| cta_label        | string     |
| cta_url          | string     |
| cover_image_url  | string     |
| project_image_url| string     |
| is_protected     | boolean    |

### Table: `auth_keys` (for future password access)
| Field        | Type     |
|-------------|----------|
| id          | UUID     |
| password    | string   |
| service_tag | string   |

---

## 3. 🔧 Setup Checklist

### 🧰 One-time Installations
1. `npx create-next-app@latest`
2. `npx shadcn-ui@latest init` — setup Tailwind + UI
3. `npm install @supabase/supabase-js`
4. Connect to your Supabase project (add `.env` keys)
5. Setup Cursor MCP: Reference ProjectCard variants from Figma

---

### ✍🏽 Cursor Prompt (MCP) for Project Cards

```
You are a frontend engineer working with Figma design files.

Please generate a modular React component named `<ProjectCard>` that takes props for:
- variant: 'v1' | 'v2' | 'v3' | 'v4' | 'v5'
- overline
- title
- hmw
- description
- ctaLabel
- coverImage
- projectImage

Use Tailwind CSS.
Use a responsive layout that allows for swipeable card rows (via scroll snap).
Conditionally render each variant's layout.
Reference the component structure from the Figma MCP file.
``` 