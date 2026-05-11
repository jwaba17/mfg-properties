# Design Brief: MFG — UK Property Consultancy

**Tone & Purpose:** Refined minimalism with quiet luxury. Editorial design approach for premium UK property consultancy. Clients need to feel confident, informed, and inspired.

## Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | 0.35 0.08 274 | 0.62 0.1 62 | Header, primary actions, property highlights |
| Secondary | 0.9 0.02 114 | 0.22 0.06 270 | Secondary surfaces |
| Accent | 0.65 0.12 62 | 0.75 0.14 62 | Bronze badges, premium highlights, CTA focus |
| Background | 0.96 0.02 114 | 0.12 0.05 270 | Main content area, warm cream (light) / deep slate (dark) |
| Foreground | 0.2 0.08 270 | 0.94 0.01 114 | Text, deep slate (light) / warm cream (dark) |
| Muted | 0.88 0.01 114 | 0.2 0.05 270 | Secondary text, borders |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Lora | Headlines, property titles, hero section |
| Body | GeneralSans | Body copy, descriptions, navigation |
| Mono | GeistMono | Property codes, technical details |

Type scale: 12px → 14px → 16px → 18px → 20px → 24px → 32px (headline).

## Structural Zones

| Zone | Background | Treatment | Rationale |
|------|------------|-----------|----------|
| Header | primary (0.35 0.08 274) | `border-b border-primary/20` | Authority, stability, UK heritage slate |
| Hero | background with accent highlight | Serif headline, breathing room | Editorial tone, premium feel |
| Property Grid | background | Cards on `bg-card` with subtle shadows | Scannable, editorial layout |
| Footer | primary (0.35 0.08 274) | `border-t border-primary/20`, contact layout | Matches header, grounds page |

## Spacing & Rhythm

- Border radius: `8px` (moderate, professional)
- Gutters: `2rem` (generous, breathing room)
- Card spacing: `1.5rem` internal padding
- Token spacing: 4px, 8px, 12px, 16px, 24px, 32px

## Component Patterns

- **Property Card:** Title (serif) + badge (accent bg) + description + price (large, accent text) + hover lift shadow
- **Button:** Primary (bg-primary, text-white) for CTA; secondary (border + text-primary) for actions
- **Badge:** Accent background, property type label (e.g., "Detached", "Victorian")

## Motion

- Hover: `transition-smooth` (0.3s cubic-bezier) for card lift, button color
- No entrance animations; focus on interaction clarity

## Constraints

- No gradients (editorial flatness)
- No neon/glow shadows (refined luxury)
- Serif type used sparingly (headlines only)
- Max 3 accent uses per page (focus)
- Dark mode optimized for evening browsing
