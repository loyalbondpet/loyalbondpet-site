# DESIGN.md - LoyalBond Design System

## Brand Identity

- **Brand Name**: LoyalBond (恒伴)
- **Tagline**: "Loyal companionship for every stage of life"
- **Tone**: Warm, professional, trustworthy, caring
- **Target Market**: US pet owners, primarily senior dog owners

## Design Tokens

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Brand Beige | #F5F0E8 | Warm backgrounds, section dividers |
| Brand Green | #2D5F3F | Primary brand color, headings, trust elements |
| Brand Brown | #8B6F4E | Secondary accents, earth-tone warmth |
| Brand Coral | #E07A5F | CTA buttons, highlights, urgency |
| Brand Cream | #FDFBF7 | Light page backgrounds |
| Brand Dark | #1A1A1A | Primary text, headings |
| Brand Gray | #6B7280 | Body text, secondary information |
| White | #FFFFFF | Card backgrounds, clean space |

### Typography

- **Font Family**: Inter (Google Fonts, loaded via next/font)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Headings**: Bold/Extrabold, tight tracking
- **Body**: Regular weight, relaxed line height for readability

### Spacing & Layout

- **Max Content Width**: 7xl (80rem / 1280px)
- **Section Padding**: py-16 to py-24 (responsive)
- **Card Border Radius**: rounded-2xl (16px)
- **Button Border Radius**: rounded-lg (8px)

### Shadows & Elevation

- **Cards**: shadow-sm default, shadow-lg on hover
- **Header**: shadow-sm with backdrop-blur
- **Transitions**: duration-200 to duration-300, ease-out

## Visual Strategy

### Photography Direction
- Warm, natural lighting
- Senior dogs in comfortable home environments
- Human-pet bonding moments
- Clean, uncluttered compositions

### Iconography
- Lucide React icons (outline style, strokeWidth 1.5-2)
- Consistent stroke width across all icons
- Brand green for primary icons, coral for CTAs

### Illustration Style
- Placeholder SVGs with brand green at 30% opacity
- Ready for replacement with real product photography

## Interaction Patterns

### Hover States
- Cards: lift (shadow increase) + border color shift to green
- Buttons: opacity decrease (hover:bg-brand-coral/90)
- Links: color transition to brand green

### Animations
- Fade-in-up on scroll (HeroSection carousel)
- Smooth scroll for back-to-top
- Scale transforms on icon hover (group-hover:scale-110)

### Mobile Menu
- Slide-down animation for mobile navigation
- Overlay backdrop for focus

## Design Constraints

### Do NOT
- Use cold blue tones (conflicts with warm brand identity)
- Use sharp corners (everything is rounded)
- Use heavy drop shadows (keep it light and airy)
- Use neon or saturated accent colors
- Mix serif and sans-serif fonts

### Always
- Maintain sufficient color contrast for accessibility
- Use brand coral exclusively for primary CTAs
- Keep whitespace generous for premium feel
- Use brand green for trust/authority elements
