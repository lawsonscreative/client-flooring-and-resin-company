# The Flooring and Resin Company – Website Build Specification

**Version:** 1.0  
**Project Type:** Portfolio piece for Lawsons Creative  
**Status:** Favour for friend - no payment, full portfolio rights

---

## 1. Project Context

**Client:** THE FLOORING AND RESIN COMPANY LTD  
**Type:** Family-run flooring and resin surfaces business – domestic & commercial  
**Base:** Ashford, Kent (serving Kent, the South East, and UK-wide projects)  
**Primary goal:** Generate enquiries and bookings, build credibility for relatively new company backed by 50+ years' experience

**Key differentiators:**

- **50+ years flooring experience** via founder George Spittle
- **Family-run business** – Katie (daughter) brings approachable, "female touch" to service
- Works across **domestic and commercial** including care homes, schools, hospitality
- **Strong creative edge** in resin art and feature surfaces (floors, worktops, walls, decorative pieces)
- **Proven track record** with named commercial and educational clients
- Public Liability Insurance

**Portfolio significance:**

This is a **portfolio piece for Lawsons Creative**. As this is done as a favour, I have full rights to:
- Showcase on lawsonscreative.co.uk
- Use in marketing materials
- Reference in case studies
- Display screenshots/designs

The site must demonstrate **best-in-class studio capabilities** to potential paying clients.

---

## 2. Technical Stack & Deployment

**Framework:** Next.js (latest stable version)  
**Styling:** Tailwind CSS  
**Hosting:** Vercel (automatic deployments)  
**Version Control:** GitHub (`lawsonscreative/client-flooring-and-resin-company`)  
**Domain:** TBC - test on Vercel preview URL initially

**Implementation approach:**

- Server-side rendering where beneficial for SEO
- Static generation for content pages where possible
- Minimal client-side JavaScript - progressive enhancement approach
- Image optimisation using Next.js Image component
- Responsive, mobile-first design
- Clean, semantic HTML structure

**Repository structure:**

```
client-flooring-and-resin-company/
├── docs/
│   └── (this brief + original materials)
├── public/
│   └── (images, fonts, static assets)
├── src/
│   ├── app/
│   ├── components/
│   └── content/
├── README.md
└── package.json
```

**Git workflow:**

- Feature branches for major sections
- Signed commits: `git commit -S -m "message"`
- Clear commit messages describing what was built
- Merge to main when section complete

**README must include:**

- Local development setup (`npm install`, `npm run dev`)
- Deployment to Vercel
- Where to edit content (structured data files in `/src/content/`)
- Contact form configuration
- Image guidelines

---

## 3. Brand & Visual Direction

**No existing brand identity provided** - create professional visual system that:

**Feels:**
- Professional but approachable
- Solid and trustworthy (trade business)
- Slightly warm/human (family-run aspect)
- Modern but not flashy
- Clean and spacious

**Colour palette suggestions:**
- Primary: Professional blue or charcoal (trust, expertise)
- Secondary: Warm accent (orange/terracotta or soft gold - approachable)
- Neutrals: Crisp whites, light greys for space
- Consider: Touch of natural green (resin can be any colour, eco-friendly materials)

**Typography:**
- Headings: Strong, confident sans-serif
- Body: Highly readable sans-serif
- Ensure excellent mobile readability

**Photography style:**
- When real images available: high-quality, well-lit project photos
- Hero images: Emotive, showcasing craftsmanship and finished spaces
- Use placeholder images that suggest professional photography style

**Voice & tone:**

- Plain English, no jargon
- Confident but not boastful
- Customer-focused: problems solved, spaces improved, minimal disruption
- Emphasise: craftsmanship, reliability, care for spaces
- Professional warmth - family business without being folksy

---

## 4. Company Details

Use consistently across the site:

**Legal:**
- **Company name:** THE FLOORING AND RESIN COMPANY LTD
- **Trading name:** The Flooring and Resin Company
- **Registered:** England and Wales
- **Incorporated:** 19 March 2021
- **Company number:** [to be added if provided]
- **Registered office:** Henwood House, Henwood, Ashford, Kent, TN24 8DH
- **Director:** George Spittle

**Contact:**
- **Mobile:** 07974 911629 (click-to-call, visible header/footer)
- **WhatsApp:** +44 7933 030318 (clear "Message us on WhatsApp" CTA)
- **Email:** Not provided - DO NOT invent. Use contact form + phone + WhatsApp only
- **Location statement:** Based in Ashford, serving Kent, the South East, and UK-wide projects

**Social media:**
- Facebook: `https://www.facebook.com/profile.php?id=100067777503613`
- TikTok: `https://tiktok.com/@flooringandresinco`
- LinkedIn: `http://linkedin.com/in/the-flooring-and-resin-company-146b48300`

Display as icon links in footer and on Contact/About pages.

---

## 5. Services & Specialisms

The business covers four main service areas:

### 1. Carpet
- Contract carpets and carpet tiles
- Strong experience in care homes and hospitality environments
- Commercial-grade durability

### 2. Vinyl
- Loose-lay LVT (luxury vinyl tiles)
- Sheet vinyl
- Cap-and-cove installations (hospitals, kitchens, wet rooms)
- Focus: hygiene and easy cleaning

### 3. Laminate / Engineered Wood
- Engineered wood flooring
- Solid wood laminate
- Durable with aesthetic appeal

### 4. Resin Flooring & Surfaces ⭐ (Hero service)
- Unique, durable finishes for floors
- Worktops and countertops
- Feature walls
- Decorative pieces (chopping boards, doorsteps, ornamental items)
- **Integration of artwork and bespoke designs**
- Creative, artistic edge sets them apart

**Resin spotlight:**

Resin is their most exciting and innovative offering - where creativity meets performance. Mention the **Phoenix Passage 2012** artwork by Canadian artist Greg Deda, currently on display at Chelsea Art Gallery - a stunning example of how art and flooring merge to inspire and impress.

---

## 6. Social Proof

### Previous clients (display on site):

**Commercial & Hospitality:**
- Esquires Coffee
- Sol Services
- Callaway Golf Club
- Häagen-Dazs
- The Athenaeum Club
- The Carlton Club

**Education & Community:**
- Homewood School
- St Michael's School
- Abbeyfield
- Abington Vale Primary School
- Blackthorn Primary School
- Boothville
- Castle Academy
- Delapre Primary School
- Duston Eldean Primary School
- Eastfield Academy
- Greenfields
- The Arbours
- Whitehills

### Customer testimonials:

Use these (paraphrased/refined for copy):

1. **Katie's service:**  
   "Excellent service throughout. Katie was responsive, honest, and incredibly helpful when we had questions about materials and finishes. It's rare to find a company that genuinely cares about the customer experience."

2. **Creative resin:**  
   "We wanted something bold and artistic for our showroom, and they delivered beyond imagination. The custom resin design is a true conversation starter. Their creativity and craftsmanship are unmatched."

3. **Domestic project:**  
   "From start to finish, the team appointed by George was professional, punctual, and incredibly skilled. The resin floor they installed in our kitchen is absolutely stunning—sleek, modern, and easy to clean. We've had so many compliments already!"

4. **Commercial project:**  
   "George, Katie and the team handled our office flooring with precision and care. Scheduling was seamless, communication was clear, and the final result exceeded expectations. Highly recommend for any commercial job."

5. **Professionalism:**  
   "We're thrilled with our new floors. The installers were tidy, respectful, and worked around our schedule. The quality is top-notch, and the whole process was stress-free."

Attribution labels (where needed): "Domestic client", "School business manager", "Commercial client", "Care home manager"

---

## 7. Website Goals

The site must:

### 1. Generate enquiries and bookings
- Clear CTAs on every page: "Request a quote", "Get in touch", "Book a free site visit"
- Simple, friction-light contact form
- Multiple contact methods (phone, WhatsApp, form)

### 2. Build credibility
- Emphasise 50+ years' experience prominently
- Family-run, personal service angle
- Named clients and sectors
- Genuine review quotes
- Photos of real work (when available)

### 3. Showcase creative edge
- Resin work as standout differentiator
- Artistic, bespoke approach
- Phoenix Passage artwork example
- "Previous Work" portfolio section

---

## 8. Site Structure

### v1 Pages:

1. **Home** (`/`)
2. **Services** (`/services`)
3. **Resin & Feature Surfaces** (`/resin-feature-surfaces`) - Hero service page
4. **Previous Work** (`/previous-work`) - Portfolio/projects
5. **About** (`/about`)
6. **Contact** (`/contact`)

### Additional (simple text pages):

7. **Privacy Policy** (`/privacy`)
8. **Cookie Policy** (`/cookies`)

If legal text not provided, create appropriate generic boilerplate that can be replaced later.

---

## 9. Global Layout Components

### Header (all pages)

**Desktop:**
- Left: Site name/typographic logo: "The Flooring and Resin Company"
- Centre/Right: Navigation links (Home, Services, Resin & Feature Surfaces, Previous Work, About, Contact)
- Right edge: Phone number with icon (subtle, always visible)

**Mobile:**
- Burger menu for navigation (accessible, keyboard-friendly)
- Logo/name
- Phone icon (tap to call)

**Sticky header consideration:** Header could stick on scroll for easy access to nav/contact.

### Footer (all pages)

**Layout:** 3-4 columns on desktop, stack on mobile

**Column 1: Company info**
- Company name
- Tagline: "Family-run flooring & resin specialists based in Ashford, Kent"
- Company number and registered office (small text)
- Copyright notice: © [year] THE FLOORING AND RESIN COMPANY LTD

**Column 2: Quick links**
- Home
- Services
- Resin & Feature Surfaces
- Previous Work
- About
- Contact

**Column 3: Contact**
- Mobile: 07974 911629 (click-to-call)
- WhatsApp: "Message us" link
- Service areas: Kent, South East, UK-wide

**Column 4: Follow us**
- Social media icons (Facebook, TikTok, LinkedIn)

**Footer bottom:**
- Privacy Policy | Cookie Policy links (small, separated)

---

## 10. Page Specifications

### 10.1 Home (`/`)

**Purpose:** First impression - establish credibility, showcase range, drive enquiries

**Sections:**

#### 1. Hero
- **Visual:** Large, striking image - either beautiful finished floor or resin artwork
- **Headline:** "Crafted through generations. Designed for today."
- **Subheading:** "Family-run flooring and resin specialists with over 50 years' experience. From homes to hospitals, we create surfaces that inspire."
- **CTAs:** 
  - Primary: "Request a quote"
  - Secondary: "View our work"
- **Trust signal:** Small badges/text: "50+ Years Experience | Public Liability Insured | Family Run"

#### 2. Services overview
- **Headline:** "From traditional flooring to artistic resin surfaces"
- **4 cards:** Carpet, Vinyl, Laminate, Resin (with icon/image each)
- Each card: short description (2-3 sentences), "Learn more" link to Services page
- Resin card should stand out slightly (hero service)

#### 3. Why choose us?
- **Headline:** "Quality, creativity and care in every project"
- **4-6 key points** (icon + heading + 1-2 sentences each):
  - 50+ years flooring expertise
  - Family-run, personal service
  - Domestic to large-scale commercial
  - Creative resin & artistic installations
  - Flexible on materials (supply or fit customer-supplied)
  - Public liability insurance

#### 4. Trusted by
- **Headline:** "Trusted across homes, schools, care facilities and businesses"
- **Client logos or names** (2 rows):
  - Row 1: Commercial (Esquires Coffee, Häagen-Dazs, Callaway Golf Club, The Athenaeum Club)
  - Row 2: Education (selection of schools)
- **Note:** "Just a few of the clients we've worked with across Kent and the South East"

#### 5. Featured resin work
- **Headline:** "Where art meets function"
- **Visual:** Eye-catching resin installation image
- **Copy:** Short paragraph about resin services - unique finishes, artistic designs, Phoenix Passage artwork mention
- **CTA:** "Discover our resin services"

#### 6. Recent projects (carousel or grid)
- **Headline:** "Recent work we're proud of"
- **3-4 project cards** with images, project type, brief description
- **CTA:** "See all our work"

#### 7. Testimonials
- **Headline:** "What our clients say"
- **2-3 testimonials** (rotating carousel or grid)
- Each: quote, attribution, optional star rating visual

#### 8. CTA section
- **Headline:** "Ready to transform your space?"
- **Copy:** "From a single room to a complete commercial fit-out, we're here to help. Get in touch for a no-obligation chat about your project."
- **CTAs:**
  - "Request a quote" (button)
  - "Call us now" (button with phone number)
  - "Message on WhatsApp" (button)

---

### 10.2 Services (`/services`)

**Purpose:** Detailed breakdown of all service types

**Sections:**

#### 1. Hero
- **Headline:** "Professional flooring solutions for every space"
- **Subheading:** "From traditional carpet and vinyl to innovative resin surfaces, we cover it all."
- **Breadcrumb:** Home > Services

#### 2. Service sections (one per service type)

Each service gets its own section with:
- Icon or small image
- Service name as h2
- Detailed description (3-5 paragraphs covering):
  - What it is
  - Where it's used
  - Benefits
  - Their specific expertise/approach
- "Best for" list (bullet points - e.g. "Best for: Care homes, hospitals, wet rooms")
- Soft CTA: "Interested in [service]? Get in touch"

**Order:**
1. Carpet
2. Vinyl
3. Laminate / Engineered Wood
4. Resin Flooring & Surfaces (most detailed, link to dedicated resin page)

#### 3. Commercial vs Domestic
- **Headline:** "We work with everyone"
- **Two columns:**
  - Domestic: Homes, extensions, renovations
  - Commercial: Offices, schools, care homes, hospitality, healthcare
- **Copy:** Flexible approach, same care and quality regardless of project size

#### 4. Materials
- **Headline:** "Supply or fit - whatever works for you"
- **Copy:** Can supply all materials or fit customer-supplied materials. Honest advice on best options for the space.

#### 5. CTA
- "Not sure which service you need? We're happy to advise."
- Quote request button

---

### 10.3 Resin & Feature Surfaces (`/resin-feature-surfaces`)

**Purpose:** Showcase the creative, artistic edge - the differentiator

**Sections:**

#### 1. Hero
- **Visual:** Stunning resin installation (floor or feature surface)
- **Headline:** "Where creativity meets performance"
- **Subheading:** "Unique resin surfaces that transform spaces into works of art"

#### 2. What is resin?
- **Headline:** "More than just flooring"
- **Copy:** Explain resin flooring/surfaces (2-3 paragraphs):
  - Durable, seamless finishes
  - Endless colour and design possibilities
  - Can be applied to floors, worktops, walls, decorative items
  - Hygienic, easy to clean
  - Long-lasting

#### 3. Applications
- **Headline:** "From floors to feature pieces"
- **Grid of applications** (with icons/small images):
  - Flooring (commercial & domestic)
  - Worktops & countertops
  - Feature walls
  - Decorative items (chopping boards, doorsteps, art panels)

#### 4. The artistic edge
- **Headline:** "Art integrated into surfaces"
- **Copy:** 
  - Ability to incorporate bespoke designs and artwork
  - Custom colours, patterns, embedded objects
  - Each installation is unique
- **Feature:** Phoenix Passage 2012 artwork mention:
  - "One of our proudest showcases is Phoenix Passage 2012 by Canadian artist Greg Deda, currently on display at the Chelsea Art Gallery - a stunning example of how art and flooring can merge to inspire and impress."

#### 5. Why choose resin?
- **Bullet list benefits:**
  - Completely bespoke and unique
  - Extremely durable
  - Hygienic and easy to clean
  - Seamless finish
  - Suitable for high-traffic areas
  - Unlimited design possibilities

#### 6. Resin gallery
- **Headline:** "Resin installations we've created"
- **Photo gallery** (grid, lightbox on click)
- Placeholder images until real photos available

#### 7. Who it's for
- **Headline:** "Perfect for:"
- **Bullets:**
  - Homeowners wanting a unique kitchen or bathroom
  - Businesses needing a standout showroom or reception
  - Hospitality venues creating memorable spaces
  - Anyone who values creativity and craftsmanship

#### 8. CTA
- "Ready to create something extraordinary?"
- Quote request button
- "Or call us to discuss your ideas" with phone number

---

### 10.4 Previous Work (`/previous-work`)

**Purpose:** Build trust through real projects and versatility demonstration

**Sections:**

#### 1. Hero
- **Headline:** "Projects we're proud of"
- **Subheading:** "A selection of our work across domestic and commercial spaces"

#### 2. Filter/category options (optional, nice-to-have)
- Buttons: All | Domestic | Commercial | Care Homes | Schools | Hospitality | Resin

#### 3. Projects grid
- **Minimum 4-6 example projects** in content
- Each project card:
  - Featured image
  - Project title (e.g. "Care Home Vinyl Installation, Kent")
  - Project type tags (e.g. "Commercial | Vinyl")
  - Brief description (2-3 sentences)
  - Optional: Client quote if available
  - Optional: "View project" link (future enhancement - individual project pages)

**Example projects to include** (can be summarised/composite until real details provided):

1. **Domestic Resin Kitchen Floor**
   - Custom resin installation
   - Modern, easy-to-clean finish
   - Client testimonial about compliments received

2. **Primary School Vinyl Flooring**
   - Large-scale educational project
   - Durable, child-friendly materials
   - Mention specific school if appropriate

3. **Care Home Carpet Installation**
   - Contract carpet throughout facility
   - Focus on comfort and safety
   - Client feedback on professionalism

4. **Hospitality Venue Resin Feature**
   - Creative resin surface in reception/bar area
   - Artistic, bespoke design
   - Became talking point for venue

5. **Office Vinyl Upgrade**
   - Commercial office flooring
   - Minimal disruption to business
   - Professional, on-schedule delivery

6. **Domestic Laminate Installation**
   - Engineered wood flooring in home
   - Beautiful finish, quality workmanship
   - Tidy, respectful service

#### 4. Closing note
- **Copy:** "We're continually adding more of our work to this page. If you'd like to see examples similar to your project, just mention it when you get in touch."
- **CTA:** "Discuss your project"

---

### 10.5 About (`/about`)

**Purpose:** Tell the story - family business, experience, values

**Sections:**

#### 1. Hero
- **Headline:** "Crafted through generations. Designed for today."
- **Copy:** "The Flooring and Resin Company is a proud family-run business with over 50 years of experience in the flooring industry. Built on generations of craftsmanship and care, we deliver quality, reliability, and a personal touch to every project."

#### 2. The story
- **Headline:** "From experience comes excellence"
- **Copy:**
  - George's 50+ years in the flooring industry
  - Business founded in 2021 as The Flooring and Resin Company
  - Katie's involvement bringing approachable, personal, "female touch"
  - Family values: care, respect for spaces, reliability
  - From domestic roots to commercial focus

#### 3. From homes to hospitals
- **Headline:** "Versatile expertise across sectors"
- **Copy:** Short narrative linking domestic roots to current commercial work
- **Sectors served:**
  - Domestic homes
  - Care homes and assisted living facilities
  - Schools and educational institutions
  - Hospitality (restaurants, clubs, leisure)
  - Commercial offices and workplaces
  - Healthcare facilities

#### 4. Why choose us?
- **Headline:** "What sets us apart"
- **6 key points:**
  1. 50+ years' flooring experience
  2. Family-run with genuine personal service
  3. Comfortable with both small domestic and large commercial projects
  4. Flexible on materials (supply or fit customer-supplied)
  5. Public Liability Insurance
  6. Unique combination of technical precision and creative resin work

#### 5. Testimonials
- **Headline:** "In our clients' words"
- **3-5 choice quotes** from review pool (different ones to homepage if possible)

#### 6. CTA
- **Headline:** "Let's talk about your project"
- **Copy:** "Whether you're planning a single room refresh or a complete commercial refit, we'd love to hear from you."
- **Buttons:** "Request a quote" | "Ask a question"

---

### 10.6 Contact (`/contact`)

**Purpose:** Make enquiries and quote requests frictionless

**Sections:**

#### 1. Hero
- **Headline:** "Get in touch"
- **Subheading:** "We're here for friendly, no-obligation conversations about your project. Whether you need a quick question answered or a detailed quote, we'll respond promptly."

#### 2. Contact methods
- **Headline:** "Speak to us directly"
- **Three prominent options:**
  
  **Call us:**
  - Mobile: 07974 911629
  - Large click-to-call button on mobile
  - "Available during business hours"

  **WhatsApp:**
  - +44 7933 030318
  - "Message us on WhatsApp" button
  - "Quick responses, send photos of your space"

  **Social media:**
  - Links to Facebook, TikTok, LinkedIn

#### 3. Service areas
- **Headline:** "Where we work"
- **Copy:** "Based in Ashford, Kent, we primarily serve clients across Kent and the South East. For larger commercial projects, we're happy to travel further afield across the UK. Get in touch to discuss."

#### 4. Contact & Quote Request Form

**Single combined form** that adapts based on enquiry type:

**Fields:**

- **Name** (required)
- **Phone** (required, validation for UK format)
- **Email** (optional but recommended)
- **Enquiry type** (dropdown):
  - General enquiry
  - Request a quote
- **If "Request a quote" selected, additional fields appear:**
  - **Property type** (dropdown):
    - Domestic home
    - Care home
    - School
    - Office
    - Hospitality/Leisure
    - Healthcare
    - Other
  - **Location** (text: "Town/city and county")
  - **Area to be worked on** (textarea with placeholder: "e.g. Kitchen, 4m x 3m" or "Multiple classrooms, approx. 200m²")
  - **Services interested in** (checkboxes):
    - Carpet
    - Vinyl/LVT
    - Laminate/Engineered Wood
    - Resin flooring
    - Resin feature surfaces
    - Not sure yet
- **Message** (textarea, required, placeholder: "Tell us about your project...")
- **Optional:** Simple file upload for photos/plans (if straightforward to implement)
  - If not implemented: "You can also send photos via WhatsApp or email them to us separately."

**Form validation:**
- Client-side validation for required fields
- Clear error messages ("Please enter your name", "Please provide a phone number")
- Phone number format validation (UK)

**Form submission:**
- Success message: "Thank you, [Name]. Your message has been sent. We'll be in touch as soon as we can."
- Error message: "Sorry, something went wrong. Please try again or contact us directly."
- Consider simple form service or Vercel serverless function
- Document clearly in README

#### 5. Map (optional)
- If simple to implement: Embedded map showing Ashford, Kent location
- Not essential for v1

---

## 11. SEO & Structured Data

### Meta tags (all pages)

**Each page must have:**
- Unique `<title>` (55-60 characters)
- Meta description (140-160 characters)
- Open Graph tags for social sharing

**Example titles:**
- Home: "The Flooring and Resin Company | Ashford, Kent | 50+ Years Experience"
- Services: "Flooring Services | Carpet, Vinyl, Laminate, Resin | Kent"
- Resin page: "Resin Flooring & Feature Surfaces | Artistic Installations | Kent"
- Previous Work: "Our Projects | Flooring Installations Across Kent & South East"
- About: "About Us | Family Flooring Business | 50+ Years Experience"
- Contact: "Contact Us | Flooring Quotes | Ashford, Kent"

### Heading structure

- One `<h1>` per page (main headline)
- Logical hierarchy: h2 for main sections, h3 for subsections
- Never skip levels

### Internal linking

Strategic links between:
- Home ↔ all main pages
- Services ↔ Resin page (resin is a service but has dedicated page)
- All pages ↔ Contact
- Previous Work ↔ specific service mentions

### Schema.org structured data (v1 minimum)

**LocalBusiness schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Flooring and Resin Company",
  "description": "Family-run flooring and resin specialists with over 50 years' experience",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Henwood House, Henwood",
    "addressLocality": "Ashford",
    "addressRegion": "Kent",
    "postalCode": "TN24 8DH",
    "addressCountry": "GB"
  },
  "telephone": "07974911629",
  "areaServed": ["Kent", "South East England"],
  "foundingDate": "2021-03-19"
}
```

Don't overcomplicate - keep schema simple and accurate for v1.

---

## 12. Accessibility

**WCAG 2.1 Level AA compliance target:**

### Semantic HTML
- Proper landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- Heading hierarchy
- Lists for list content
- Buttons for actions, links for navigation

### Colour contrast
- Text/background: minimum 4.5:1 ratio (normal text)
- Large text: minimum 3:1 ratio
- Test with tools during development

### Keyboard navigation
- All interactive elements keyboard-accessible
- Visible focus states (outline or custom indicator)
- Burger menu keyboard-operable
- Form fields accessible via Tab
- "Skip to main content" link at page top (visually hidden until focused)

### Forms
- Proper `<label>` for all inputs (associated via for/id)
- Clear error messages
- Success confirmation
- Required fields marked (both visually and programmatically)

### Images
- Descriptive alt text for functional images
- Empty alt (`alt=""`) for decorative images
- Don't use images for text content

### Mobile accessibility
- Touch targets min 44x44px
- No hover-only interactions
- Zoom-friendly (don't disable zoom)

---

## 13. Performance

**Target metrics:**
- Lighthouse Performance: 90+
- Mobile-friendly test: Pass
- Core Web Vitals: Green

**Strategies:**

### Images
- Next.js Image component for automatic optimisation
- Responsive images (srcset)
- Lazy loading for below-fold images
- WebP format where supported
- Appropriate sizing (don't serve 2000px images for 400px display)

### CSS
- Tailwind's purge/JIT to eliminate unused CSS
- Inline critical CSS if beneficial
- No large unused frameworks

### JavaScript
- Minimal client-side JS
- Only load what's needed
- Defer non-critical scripts

### Fonts
- Use system fonts where possible, or
- Optimised web font loading (font-display: swap)
- Subset fonts to needed characters

### Caching
- Leverage Vercel's edge caching
- Set appropriate cache headers

---

## 14. Content & Asset Requirements

**For full production**, the following will eventually be needed:

### Images needed:
- Logo (if created)
- Real project photographs:
  - Domestic installations (before/after if possible)
  - Care home projects
  - School projects
  - Hospitality/commercial spaces
  - Resin floors and feature pieces
  - Resin decorative items
- Team photos (George, Katie if appropriate)
- Action shots (team working, if available)

### Content confirmations:
- Final wording for "Why choose us" points
- Which testimonials to feature prominently
- Specific project details for Previous Work
- Any additional sectors to highlight

### Optional:
- Company email address
- Precise Privacy Policy and Cookie Policy wording

**For v1 launch:**
- Can use placeholder images where real photos not yet available
- Ensure placeholder style matches intended photography aesthetic
- Structure content to easily swap in real images later

---

## 15. Phase 2 (Out of Scope for v1)

**Do NOT build these yet** - but design v1 structure to accommodate later:

### CMS / Admin portal
- Secure login for client
- Ability to add/edit/delete Previous Work projects
- Upload images
- Edit copy on key pages
- No coding required

### Additional features
- Blog/articles section
- Individual project case study pages (deeper than grid cards)
- Advanced schema (FAQSchema, Project schema)
- Email newsletter signup
- Live chat widget

### v1 requirement for Phase 2:
- Store Previous Work projects as **structured data** (JSON, markdown with frontmatter, or similar)
- NOT hardcoded HTML scattered through files
- Make it programmatically migratable to a database/CMS

---

## 16. Deliverables Checklist

Claude Code should deliver:

### Functional website
- [ ] All 6 main pages built and responsive
- [ ] Navigation working (desktop & mobile)
- [ ] Footer on all pages
- [ ] All sections per page specs above

### Visual design
- [ ] Cohesive colour palette applied
- [ ] Typography system (headings, body, buttons)
- [ ] Button styles (primary, secondary)
- [ ] Card components for projects/services
- [ ] Consistent spacing and layout

### Content populated
- [ ] All copy based on this spec (ready for client refinement)
- [ ] Testimonials placed appropriately
- [ ] Client names/logos shown
- [ ] Service descriptions complete
- [ ] Placeholder images where needed (styled appropriately)

### Technical implementation
- [ ] Next.js + Tailwind CSS
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Semantic HTML
- [ ] Accessible navigation and forms
- [ ] Contact form with validation
- [ ] Success/error states for form
- [ ] Form handling (Vercel serverless or form service)
- [ ] SEO meta tags all pages
- [ ] Structured data (LocalBusiness schema)

### Previous Work structure
- [ ] Projects stored as structured data (not hardcoded)
- [ ] Easy to add/edit projects in future
- [ ] Filterable/taggable structure (even if filter UI not built)

### Documentation
- [ ] README with:
  - [ ] Setup instructions
  - [ ] Development commands
  - [ ] Deployment to Vercel guide
  - [ ] Content editing guide (where to edit services, about, projects)
  - [ ] Contact form configuration
  - [ ] Image guidelines (sizes, formats)
- [ ] Code comments where helpful
- [ ] Clear file/folder structure

### Quality assurance
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS & Android)
- [ ] Lighthouse audit (target 90+ performance)
- [ ] Accessibility check (keyboard nav, contrast, screen reader friendly)
- [ ] All links working
- [ ] No console errors
- [ ] Clean, production-ready code

---

## 17. Portfolio Documentation

**For Lawsons Creative portfolio use:**

After completion, prepare:
- High-quality screenshots (desktop & mobile)
- Brief case study write-up:
  - Challenge: New business needing credibility and enquiries
  - Solution: Modern, trust-building site showcasing creative edge
  - Outcome: Professional web presence, portfolio-worthy resin focus
- Key features to highlight:
  - Resin services page (unique differentiator)
  - Previous work showcase
  - Family business warmth with professional polish
  - Fast turnaround (1-2 week build)

Permission already granted for portfolio use.

---

## Final Notes

**This is a portfolio piece** - it must be:
- Visually impressive
- Technically solid
- Demonstrative of studio capabilities
- A strong example for attracting paying clients

**Priorities in order:**
1. Home page (first impression)
2. Resin page (differentiator)
3. Contact page (conversion)
4. Previous Work (trust)
5. Services, About (depth)

**When in doubt:**
- Choose quality over complexity
- Prioritise user clarity
- Keep it clean and professional
- Make CTAs obvious
- Ensure mobile experience is excellent

**Git commits should be:**
- Signed: `git commit -S -m "message"`
- Descriptive: "Build hero section with CTA buttons" not "updates"
- Frequent: commit after each logical section/component

---

**Spec complete. Ready for Claude Code implementation.**