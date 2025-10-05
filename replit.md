# Søke by THERMA Landing Page

## Overview

Søke is a modern landing page application showcasing a thermal camera attachment for drones. The application follows a **White Sleek Minimalist** design philosophy, featuring a clean, light aesthetic with a distinctive floating bubble header. The design emphasizes minimal text, spacious layouts, and a focus on visual elegance.

The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to present the Søke thermal camera attachment through a minimalist, professional interface with 3D model integration points.

**Product**: Søke Thermal Camera - A professional 256×192 thermal imaging attachment that works with existing drones, priced at $849.99 as an affordable alternative to expensive thermal camera drones.

## Recent Changes (October 2025)

### Søke Thermal Camera Rebranding (Latest)
- **Product Repositioning**: Complete rebrand from THERMA thermal management systems to Søke thermal camera attachment
- **Product Details**:
  - Name: Søke Thermal Camera
  - Price: $849.99 (previously $2,499 for THERMA Pro X1)
  - Type: 256×192 thermal imaging attachment for existing drones
  - Positioning: Affordable alternative to buying expensive thermal camera drones
- **Competitor Comparison Updated**: Real thermal camera drones with verified pricing
  - DJI Mavic 3 Thermal: $7,309 (professional thermal drone)
  - Autel EVO II Dual 640T V3: $4,799 (enterprise thermal drone)
  - Parrot ANAFI USA: $7,000 (NDAA-compliant thermal drone)
  - Søke Attachment: $849.99 (use your existing drone)
- **Content Updates**:
  - Opening screen: "Søke" + "Advanced Thermal Vision for Any Drone"
  - Hero section: Emphasizes attachment for existing drones
  - About section: "Professional Thermal Imaging" with camera specs (256×192 resolution, <200g weight, universal mounting)
  - Buy page: Single Søke product with thermal camera features
  - Footer: "© 2025 Søke by THERMA"
- **Visual Design**: Maintained white sleek minimalist aesthetic with floating bubble header
- **Testing**: Full e2e coverage confirms all changes on desktop and mobile

### Global Navigation Fix
- **Navigation Links Updated**: All navigation links now work from any page on the site
- **Hash Links Fixed**: Changed from "#product" to "/#product" format for cross-page navigation
- **Mobile Menu Fixed**: Mobile navigation properly closes after clicking links
- **Implementation**: Mobile nav uses button elements with handleNavClick for reliable navigation
- **Testing**: Full e2e coverage confirms navigation works from all pages (home, contact, buy) on both desktop and mobile

### Contact Us & Buy Now Pages
- **New Pages Added**:
  - Contact page (/contact) with thermahelps@gmail.com
  - Buy page (/buy) with product purchasing interface
- **Contact Page Features**:
  - Ultra-minimal white aesthetic with maximum white space
  - Large heading (text-5xl/7xl) and light subtitle
  - Prominent email as main focal point (text-3xl/4xl)
  - Centered layout with clean typography
  - Removed all visual clutter for elegant simplicity
- **Buy Page Features**:
  - Aesthetic, centered product showcase
  - 3D model placeholder for product visualization
  - Model selection: Pro X1 ($2,499), Pro X1 Plus ($2,999)
  - Color options: Black, Silver, White
  - Interactive state management for selections
  - Features list with included benefits
  - Purchase Now CTA button
- **Navigation Updates**:
  - Header Contact Us button links to /contact
  - Header Buy Now button links to /buy
  - Mobile menu includes both navigation options
  - Logo returns to home page
- **Testing**: Full e2e test coverage for both pages on desktop and mobile

### Apple-Style Opening Experience
- **Design Philosophy**: Apple iPhone-inspired opening with scroll-triggered animations
- **Opening Screen**:
  - Full-screen fixed 3D render section (100vh)
  - Text fades in at bottom after 800ms ("THERMA" + subtitle)
  - Enhanced 3D placeholder with animated gradient and glow effect
  - Smooth opacity and translate-y animations
- **Scroll-Triggered Content**:
  - Main site content starts hidden below viewport (translateY(100vh))
  - Slides up smoothly as user scrolls down
  - Linear transition based on scroll progress
  - Rounded top corners (3rem) for Apple-like reveal
  - Shadow effect for depth and polish
- **Visual Effects**:
  - Gradient backgrounds on 3D section
  - Pulse animation on placeholder
  - Smooth scroll tracking with cleanup
  - Responsive on mobile and desktop
- **Persistent Bubble Header**:
  - Floating bubble header visible throughout entire scroll journey
  - Stays fixed at top across all pages and scroll positions
  - White sleek minimalist aesthetic
  - Backdrop blur and minimal text
- **Testing**: Full e2e test coverage confirms opening animation, text fade-in, and scroll slide-in work correctly

### Previous: DJI-Inspired Landing Page Implementation
- **Initial Design**: DJI-style dark theme with signature blue accent
- **3D Integration**: Added Three.js packages (@react-three/fiber v8, @react-three/drei v9)
- **Components Created**:
  - `Header.tsx`: Now features floating bubble design
  - `Model3D.tsx`: 3D model integration placeholder (ready for GLTF/GLB models)
  - Comprehensive home page with minimalist sections

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- React Router via `wouter` for client-side routing with minimal bundle size
- Frontend code lives in `client/` directory with entry point at `client/src/main.tsx`

**UI Component System**
- shadcn/ui component library (configured in `components.json`) providing pre-built, customizable Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via React Context (`ThemeProvider`)
- Design system follows specific color palette and typography guidelines defined in `design_guidelines.md`

**State Management & Data Fetching**
- TanStack React Query (v5) for server state management and API data fetching
- Custom query client configuration with error handling and credential management
- No complex client state management needed - primarily presentation layer

**Styling Philosophy**
- Light/white theme as default (clean minimalist aesthetic)
- Custom CSS variables system for colors, spacing, and elevation
- Inter font for body text, Space Grotesk for headings
- Hover and active state elevation effects via CSS utilities
- Floating bubble header with backdrop blur and pill shape (rounded-full)

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- HTTP server created via Node's native `http` module
- Development mode uses `tsx` for TypeScript execution
- Production build uses `esbuild` for efficient bundling

**Development vs Production**
- Development: Vite middleware integrated into Express for HMR and asset serving
- Production: Static files served from `dist/public` directory after Vite build
- Middleware mode allows single-server setup during development

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Routes registered via `registerRoutes` function in `server/routes.ts`
- Request/response logging middleware for debugging
- Error handling middleware catches and formats errors consistently

### Data Storage Solutions

**Database Setup**
- Drizzle ORM configured for PostgreSQL dialect
- Schema defined in `shared/schema.ts` and shared between client/server
- Migration files output to `./migrations` directory
- Currently includes basic `users` table with UUID primary keys

**Storage Abstraction**
- `IStorage` interface in `server/storage.ts` defines CRUD operations
- `MemStorage` class provides in-memory implementation for development/testing
- Design allows easy swap to database-backed storage (PostgreSQL via Drizzle)
- Neon Database serverless PostgreSQL driver included in dependencies

**Session Management**
- `connect-pg-simple` dependency indicates PostgreSQL session store capability
- Session handling not yet fully implemented in current codebase

### External Dependencies

**UI & Component Libraries**
- Radix UI primitives (accordion, dialog, dropdown, select, tabs, tooltip, etc.)
- Embla Carousel for carousels
- Lucide React for iconography
- React Hook Form with Zod resolvers for form validation
- `cmdk` for command palette functionality
- `class-variance-authority` and `clsx` for conditional styling
- `date-fns` for date manipulation

**3D Rendering (New)**
- Three.js for WebGL 3D rendering
- @react-three/fiber v8 - React renderer for Three.js (compatible with React 18)
- @react-three/drei v9 - Helper components and utilities for 3D scenes
- Ready for GLTF/GLB 3D model integration

**Database & ORM**
- Drizzle ORM (v0.39+) for database operations and type-safe queries
- Drizzle Kit for migrations
- Drizzle Zod for schema validation
- @neondatabase/serverless for PostgreSQL connection

**Development Tools**
- Replit-specific plugins: cartographer, dev-banner, runtime error modal
- TypeScript with strict mode enabled
- ESBuild for production bundling
- PostCSS with Autoprefixer

**Design System**
- Custom Tailwind configuration with extended theme
- CSS variables for dynamic theming
- Custom border radius and color system
- Responsive design with mobile breakpoint at 768px