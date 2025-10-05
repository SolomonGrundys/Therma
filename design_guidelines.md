# THERMA Landing Page Design Guidelines

## Design Approach
**Strategy**: DJI-Inspired Tech Minimalism - Drawing inspiration from DJI.com's sleek, product-focused design. This approach emphasizes stunning visuals, seamless 3D integration, and premium tech aesthetic that communicates cutting-edge innovation.

**Core Principles**:
- Full-width immersive imagery and video backgrounds
- Strategic placement of 3D product models for interactive exploration
- Clean, modern layouts with bold typography
- Dark-first design with high contrast elements
- Smooth scrolling and subtle animations

---

## Color Palette

### Dark Mode (Primary - DJI Style)
- **Background**: 0 0% 5% (deep black)
- **Surface**: 0 0% 10% (elevated dark gray)
- **Primary**: 0 0% 98% (crisp white for text)
- **Accent**: 200 100% 50% (DJI signature blue)
- **Accent Hover**: 200 90% 60% (lighter blue on hover)
- **Muted Text**: 0 0% 65% (medium gray)
- **Border**: 0 0% 20% (subtle borders)

### Light Mode
- **Background**: 0 0% 100% (pure white)
- **Surface**: 0 0% 96% (light gray)
- **Primary**: 0 0% 5% (near black)
- **Accent**: 200 95% 48% (vibrant blue)
- **Accent Hover**: 200 85% 55%
- **Muted Text**: 0 0% 45%
- **Border**: 0 0% 85%

---

## Typography

**Primary Font**: Inter (Google Fonts) - Clean, modern, excellent for tech
**Secondary Font**: Space Grotesk (Google Fonts) - For headings, geometric feel

**Type Scale**:
- **Hero Heading**: text-6xl/text-7xl (72px desktop), font-bold, tracking-tight
- **Section Headings**: text-4xl/text-5xl, font-bold, Space Grotesk
- **Subheadings**: text-xl/text-2xl, font-medium
- **Body**: text-base/text-lg, font-normal, leading-relaxed
- **Small Text**: text-sm, opacity-70

---

## Layout System

**Spacing Framework**: Use Tailwind units 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl with px-6 to px-8

**Grid System**:
- Desktop: 12-column grid, gap-8
- Tablet: 8-column grid, gap-6
- Mobile: Single column, gap-4

---

## Component Library

### 1. Hero Section (Full Viewport)
- **Layout**: Full-width hero with large background image/video
- **Content**: Left-aligned or centered
  - THERMA logo (large, prominent)
  - Headline: "Leading Thermal Innovation" (text-6xl)
  - Subheadline describing core value proposition (text-xl, max-w-2xl)
  - Primary CTA button + Secondary CTA (outline variant with backdrop blur)
  - Scroll indicator at bottom
- **Background**: High-resolution image of thermal technology, gradient overlay (dark)

### 2. Trust Indicators Bar
- Horizontal strip below hero
- Display: Client logos or key metrics (4-6 items)
- Stats format: Large number + small descriptor
- Background: Surface color, subtle border

### 3. About/Mission Section
- **Layout**: Two-column (lg:grid-cols-2)
- Left: Large heading + body text (max-w-prose)
- Right: Supporting image or diagram
- Mobile: Stack vertically

### 4. Technology/Services Showcase
- **Layout**: Three-column grid (md:grid-cols-2 lg:grid-cols-3)
- Each card:
  - Icon (Heroicons - outline style, large 64px)
  - Heading (text-2xl, font-semibold)
  - Description (text-base, 2-3 lines)
  - Optional "Learn More" link
- Card styling: Subtle border, hover:shadow-lg transition

### 5. Featured Solutions/Products
- **Layout**: Alternating two-column sections
- Section 1: Image left, content right
- Section 2: Content left, image right
- Each featuring:
  - Product/solution name (text-4xl)
  - Key benefits (bullet points with checkmark icons)
  - Technical specifications or highlights
  - CTA button
- Images: Large, high-quality product shots

### 6. Innovation Showcase
- **Layout**: Full-width background image section with overlay
- Center-aligned content box
- Heading + compelling description
- CTA: "View Our Portfolio" or "Explore Innovation"

### 7. Testimonials/Case Studies
- **Layout**: Two-column grid (md:grid-cols-2)
- Each testimonial card:
  - Quote text (text-lg, italic)
  - Company logo
  - Name + title + company
  - Optional: Small project image
- Background: Surface color with border

### 8. Contact/CTA Section
- **Layout**: Two-column (md:grid-cols-5)
- Left (col-span-3): Contact form
  - Name, Email, Company, Message fields
  - Submit button (full accent color)
- Right (col-span-2): Contact information
  - Office locations
  - Phone/Email
  - Response time indicator ("We respond within 24 hours")

### 9. Footer
- **Layout**: Three-column grid (md:grid-cols-3)
- Column 1: THERMA logo + tagline + social links
- Column 2: Quick links (About, Services, Contact, Careers)
- Column 3: Newsletter signup
  - Email input + Subscribe button
  - Privacy policy link
- Bottom bar: Copyright + legal links

---

## Images

### Required Images:
1. **Hero Background**: Large-scale thermal imaging or industrial machinery shot, dramatic lighting, blue/orange thermal gradient. Should evoke precision and technology. Dimensions: 1920x1080 minimum.

2. **About Section**: Clean laboratory or manufacturing facility image showing THERMA technology in action. Professional, well-lit. 800x600.

3. **Product/Solution Images (3x)**: High-quality renders or photographs of thermal products/systems. Clean backgrounds, professional lighting. 1200x800 each.

4. **Innovation Showcase Background**: Abstract thermal pattern or cutting-edge facility shot. Full-width, 1920x600.

5. **Case Study/Testimonial Images (2x)**: Client facilities or implementations. 600x400 each.

---

## Navigation

**Header** (Sticky):
- THERMA logo (left)
- Nav links: About | Solutions | Technology | Case Studies | Contact (center)
- CTA button: "Get Started" (right)
- Mobile: Hamburger menu
- Background: Transparent over hero, solid with backdrop-blur on scroll
- Height: h-20

---

## Interactive Elements

**Buttons**:
- Primary: Accent color background, white text, px-8 py-4, rounded-lg, font-semibold
- Outline: Border-2 accent color, backdrop-blur-sm on images, transparent background
- Hover: Slight scale (scale-105), shadow increase

**Cards**: 
- Border: border surface color
- Hover: border-accent/50, shadow-xl, translate-y-[-4px]
- Transition: all 300ms

**Links**:
- Underline on hover
- Color: accent color
- Transition: 200ms

---

## Animations

Use sparingly:
- Fade-in on scroll for sections (opacity 0 to 1)
- Parallax subtle effect on hero background (0.5x scroll speed)
- Smooth scroll behavior for navigation
- No loading spinners or complex animations

---

## Responsive Breakpoints

- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (two-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

---

## Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- All images have alt text
- Form labels properly associated
- Focus states visible (ring-2 ring-accent)
- Skip to content link