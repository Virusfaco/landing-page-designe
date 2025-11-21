# Planning Guide

A high-converting landing page designed to increase sales by 20% over 6 months through strategic attention capture, clear value proposition, and optimized call-to-action placement that follows proven conversion principles.

**Experience Qualities**:
1. **Trustworthy** - Builds immediate credibility through real product imagery, clear messaging, and professional design that eliminates doubt
2. **Focused** - Maintains singular attention on the primary conversion goal with zero navigation distractions and progressive information disclosure
3. **Urgent** - Creates compelling reasons to act now through strategic offer framing and persuasive visual hierarchy

**Complexity Level**: Content Showcase (information-focused)
This is a single-purpose conversion tool focused on presenting one clear offer with strategic information architecture to guide users toward a single action.

## Essential Features

### Hero Section with Immediate Value Proposition
- **Functionality**: Captures attention within first 8 seconds with headline, subheadline, hero image, and primary CTA
- **Purpose**: Prevent the 50% bounce rate by immediately communicating unique value
- **Trigger**: Page load
- **Progression**: Eye-catching headline (2x font size of body) → Supporting subheadline → Hero product image → Prominent CTA button
- **Success criteria**: Hero CTA visible above fold, headline uses benefit-driven language, image shows product in use

### Benefits Over Features Section
- **Functionality**: Presents 3-4 key benefits with icons and concise copy
- **Purpose**: Answer "what's in it for me?" before asking for commitment
- **Trigger**: User scrolls past hero
- **Progression**: Benefit icon → Bold benefit title → 1-2 sentence explanation → Visual reinforcement
- **Success criteria**: Each benefit takes <5 seconds to scan, icons are simple/recognizable

### Social Proof Elements
- **Functionality**: Displays customer testimonials, trust badges, or usage statistics
- **Purpose**: Build trust and overcome skepticism (45% reduction in form abandonment)
- **Trigger**: Appears after benefits, before main conversion form
- **Progression**: Customer photo/logo → Specific testimonial quote → Name/title → Trust indicator
- **Success criteria**: Real testimonials with specific outcomes, authentic photos

### Simple Lead Capture Form
- **Functionality**: Collects essential information only (max 3-5 fields)
- **Purpose**: Convert interested visitors while minimizing friction
- **Trigger**: User convinced of value, ready to act
- **Progression**: Form headline matching emotional message → Minimal fields → Clear submit button → Privacy reassurance
- **Success criteria**: Form completion rate >25%, fields clearly labeled, submit button uses action verb

### Strategic CTA Placement
- **Functionality**: Multiple CTA buttons at strategic scroll points
- **Purpose**: Provide conversion opportunities when user is ready (not just at page end)
- **Trigger**: Hero section, after benefits, after social proof, final section
- **Progression**: Eye catches CTA → Reads action-oriented text → Clicks → Smooth scroll to form or direct action
- **Success criteria**: Primary CTA contrasts strongly with background, appears 2-3 times, uses same color/style

## Edge Case Handling

- **Fast Scrollers**: Multiple CTA placements catch users at different scroll depths
- **Skeptical Visitors**: Social proof and trust indicators positioned before asking for commitment
- **Mobile Users**: Touch-friendly buttons (min 44px), simplified single-column layout, tap-to-call functionality
- **Form Anxiety**: Field count minimized to essentials, clear privacy statement, visual feedback on input
- **Slow Deciders**: Final CTA section repeats core offer with urgency element

## Design Direction

The design should feel professional, trustworthy, and action-oriented with a clean, uncluttered interface that guides the eye naturally down the page toward conversion points. Strategic use of whitespace and visual hierarchy creates a calm, confident path to action rather than overwhelming visitors with information.

## Color Selection

Complementary (opposite colors) - Creates strong visual contrast between brand elements and call-to-action buttons, ensuring CTAs stand out dramatically while maintaining visual harmony.

- **Primary Color**: Deep Blue (oklch(0.45 0.12 250)) - Communicates trust, professionalism, and reliability; used for headers and brand elements
- **Secondary Colors**: Soft Gray (oklch(0.96 0.005 250)) backgrounds and Light Blue (oklch(0.92 0.03 250)) accents for cards and subtle emphasis without competing for attention
- **Accent Color**: Vibrant Orange (oklch(0.68 0.19 45)) - High-energy CTA color that demands action; creates maximum contrast with blue primary color for button visibility
- **Foreground/Background Pairings**:
  - Background (White oklch(0.99 0 0)): Dark text (oklch(0.25 0.02 250)) - Ratio 12.8:1 ✓
  - Primary (Deep Blue oklch(0.45 0.12 250)): White text (oklch(0.99 0 0)) - Ratio 8.2:1 ✓
  - Accent (Vibrant Orange oklch(0.68 0.19 45)): White text (oklch(0.99 0 0)) - Ratio 5.1:1 ✓
  - Card (Soft Gray oklch(0.96 0.005 250)): Dark text (oklch(0.25 0.02 250)) - Ratio 11.5:1 ✓
  - Muted (Light Blue oklch(0.92 0.03 250)): Dark Blue text (oklch(0.35 0.08 250)) - Ratio 9.2:1 ✓

## Font Selection

Typography should project confidence and clarity with excellent readability at all sizes, using a modern sans-serif for headlines that commands attention and a highly legible sans-serif for body copy that facilitates rapid scanning.

- **Typographic Hierarchy**:
  - H1 (Hero Headline): Poppins Bold/48px/tight leading (-0.02em) - Commands immediate attention
  - H2 (Section Headers): Poppins SemiBold/36px/normal leading
  - H3 (Benefit Titles): Poppins SemiBold/24px/normal leading
  - Body (Description): Inter Regular/18px/relaxed leading (1.6) - Maximum readability
  - CTA Button: Poppins SemiBold/18px/wide letter-spacing (0.03em) - Feels substantial
  - Small Print: Inter Regular/14px/normal leading - Privacy/trust indicators

## Animations

Animations should be purposeful and subtle, used primarily to guide attention to conversion elements and provide feedback on interactions without delaying user actions or feeling gimmicky.

- **Purposeful Meaning**: Motion reinforces the focused, trustworthy brand personality - entrance animations draw eyes to key conversion points, hover states confirm interactivity
- **Hierarchy of Movement**: CTAs receive micro-interactions on hover (subtle lift + shadow), hero section fades in on load, benefit icons scale slightly on scroll-into-view, form fields highlight on focus

## Component Selection

- **Components**:
  - **Button**: Primary CTA with hover lift effect and shadow, large touch target (min 56px height)
  - **Card**: Benefit cards with subtle shadow and hover state for visual grouping
  - **Input/Textarea**: Clean form fields with focus states and inline validation
  - **Avatar**: Circular testimonial photos for social proof section
  - **Badge**: Trust indicators and guarantee badges
  - **Separator**: Subtle dividers between major sections
  
- **Customizations**:
  - **Hero CTA Button**: Extra-large variant with orange accent color and white text, prominent shadow
  - **Benefit Cards**: Custom grid layout with icon, heading, and description in vertical alignment
  - **Testimonial Component**: Custom card with quote styling, avatar, and customer details
  - **Sticky CTA Bar**: Mobile-only fixed bottom CTA that appears after hero scroll

- **States**:
  - Buttons: Default (orange), Hover (darker orange with lift), Active (pressed state), Focus (ring), Disabled (gray)
  - Inputs: Default (gray border), Focus (blue ring + border), Error (red border + message), Success (green checkmark)
  - Cards: Default (subtle shadow), Hover (increased shadow + slight lift for interactive elements)

- **Icon Selection**:
  - **CheckCircle**: Benefit checkmarks and success states
  - **ShieldCheck**: Trust and security indicators
  - **Users**: Social proof and testimonial sections
  - **Lightning**: Speed/efficiency benefits
  - **Heart**: Satisfaction/quality benefits
  - **ArrowRight**: CTA button directional cue
  - **Star**: Rating displays

- **Spacing**:
  - Section padding: py-16 md:py-24 (64px-96px vertical)
  - Container max-width: max-w-6xl (1152px)
  - Content gaps: gap-12 md:gap-16 between major sections
  - Card gaps: gap-8 for benefit grid
  - Text spacing: space-y-4 for body content, space-y-6 for section content

- **Mobile**:
  - Hero: Single column, larger headline (40px), CTA full-width below fold
  - Benefits: Single column stack instead of grid
  - Form: Full-width inputs, larger touch targets
  - Sticky CTA: Fixed bottom bar with primary action appears after scrolling past hero
  - Images: Full-width, aspect-ratio maintained
  - Spacing: Reduced section padding (py-12) for mobile efficiency
