FILENAME: tfrc-website-spec-v1.md

# The Flooring and Resin Company – Website Build Specification (v1)

## 1. Overview

**Client:** THE FLOORING AND RESIN COMPANY LTD  
**Type:** Family-run flooring and resin surfaces business – domestic & commercial  
**Base:** Ashford, Kent (serving Kent, the South East, and projects UK-wide)  
**Primary goal:** Generate more enquiries and bookings, and build credibility for a relatively new company backed by 50+ years’ experience.

**Key differentiators:**

- 50+ years flooring experience via founder George.
- Family-run; Katie (daughter) brings an approachable, “female touch” to service.
- Works across domestic and commercial, including:
  - Care homes
  - Schools and education
  - Hospitality and commercial spaces
- Strong creative edge in **resin art and feature surfaces** (floors, worktops, feature walls, decorative pieces).
- Proven track record with named commercial and educational clients.
- Public Liability Insurance (no exact details provided; leave wording generic).

**This spec is for v1 only:**

- **Brochure / lead-gen site** using static content.
- **No client-admin portal / CMS in v1.**
- Previous work / projects are edited manually for now by the developer in code/content files.

Future admin portal / CMS is a **Phase 2** item and must be left out of the current build.

---

## 2. Technical & Hosting Requirements

- **Methodology:** Built using Agentic Coding with Claude Code.
- **Version control:** Code in its own GitHub repository.
- **Hosting:** Vercel (free/standard tier compatible).
- **Domain:** Not yet acquired; initial testing can use Vercel preview URL.

**Implementation expectations:**

- Static or statically generated site suitable for Vercel.
- Keep dependencies minimal; avoid heavy frameworks unless there is a clear benefit.
- Modern, semantic HTML structure, responsive CSS, minimal JavaScript (only where needed for UI enhancements such as nav toggles or light filtering).
- Provide a clear **README** that explains:
  - How to run the project locally.
  - How to build and deploy to Vercel.
  - Where to edit page content (e.g. markdown/config/content files) for future manual updates.

---

## 3. Brand & Voice

There is no formal visual identity yet (no provided logo, colour palette or type system), so:

- Create a **clean, modern, trade-friendly visual style** that feels:
  - Professional but approachable.
  - Solid and trustworthy rather than flashy.
  - Slightly warm / human to reflect the family-run, “female touch” aspect.

**Voice & tone:**

- Plain-English, no jargon.
- Confident but not boastful.
- Customer-focused: problems solved, spaces improved, disruption minimised.
- Emphasise:
  - Craftsmanship
  - Reliability
  - Care for people’s spaces (especially care homes, schools, homes).

---

## 4. Contact & Company Details

Use these details consistently across the site:

- **Company name:** THE FLOORING AND RESIN COMPANY LTD  
- **Trading name (front-end):** The Flooring and Resin Company
- **Registered in:** England and Wales  
- **Incorporated:** 19 March 2021  
- **Registered office:**  
  Henwood House, Henwood, Ashford, Kent, United Kingdom, TN24 8DH  

- **Director:** George Spittle  
- **Location statement:** Based in Ashford, working across Kent, the South East, and projects further afield in the UK.

**Contact details:**

- **Mobile:** 07974 911629 (click-to-call on mobile, visible in header/footer and Contact page)
- **WhatsApp:** +44 7933 030318 (use a clear “Message us on WhatsApp” link/button)
- **Email:** Not provided – DO NOT invent one. Leave as:
  - Contact form
  - Phone number
  - WhatsApp
  (If an email is later supplied, it can be added to the Contact page and footer.)

**Social profiles:**

- Facebook – `https://www.facebook.com/profile.php?id=100067777503613`
- TikTok – `https://tiktok.com/@flooringandresinco`
- LinkedIn – `http://linkedin.com/in/the-flooring-and-resin-company-146b48300`

Show these as icons in footer and on Contact/About as appropriate.

---

## 5. Services & Specialisms (Content Model)

The business covers:

- **Carpet** – contract carpets and carpet tiles; strong experience in care homes and hospitality.
- **Vinyl** – loose-lay LVT and sheet vinyl; includes cap-and-cove installations for hospitals, kitchens, wet rooms; focus on hygiene and easy cleaning.
- **Laminate / Engineered Wood** – durable, attractive wood/wood-look flooring.
- **Resin flooring & surfaces** – “hero” service:
  - Unique, durable finishes for floors.
  - Worktops, countertops, feature walls.
  - Decorative pieces (e.g. boards, steps, art panels).
  - Integration of artwork and bespoke designs.

These need to be reflected as distinct service types on the **Services** page and in other sections (e.g. project tags, hero copy).

---

## 6. Social Proof

**Previous work & clients** (non-exhaustive, but should appear on site somewhere):

- **Commercial & Hospitality:**
  - Esquires Coffee  
  - Sol Services  
  - Callaway Golf Club  
  - Häagen-Dazs  
  - The Athenaeum Club  
  - The Carlton Club  

- **Education & Community:**
  - Homewood School  
  - St Michael’s School  
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

**Customer review snippets** – build a small pool to draw from for:

- Testimonials section on Home/About.
- Project quotes on Previous Work page.

Example review themes (paraphrased for copy):

- Katie is responsive, honest and helpful about materials and finishes.
- They care about customer experience; rare to find.
- Creative resin designs became a talking point in showrooms.
- Resin floor in kitchen is modern, easy to clean, highly praised.
- Office flooring project: precise, well-scheduled, exceeded expectations.
- Installers were tidy, respectful, and worked around the client’s schedule.

(Exact wording can be derived from the brief; ensure each quote has an attribution label like “Domestic client”, “School business manager”, “Commercial client” etc.)

---

## 7. Primary Website Goals

The site must:

1. **Generate enquiries and bookings**
   - Clear calls-to-action (CTAs) on every page:
     - “Request a quote”
     - “Book a free site visit” or similar.
   - Simple, friction-light contact form and quote request form.

2. **Build credibility**
   - Emphasise 50+ years of experience.
   - Family-run, personal service.
   - Named clients and sectors.
   - Genuine review quotes; photos of real work (when available).

3. **Showcase recent projects & resin creativity**
   - “Previous Work” page with projects.
   - Resin-specific page showing creative, art-led edge.

---

## 8. Sitemap / Pages

v1 sitemap:

- `/` – Home
- `/services` – Services overview
- `/resin-feature-surfaces` – Resin & feature surfaces (hero service page)
- `/previous-work` – Previous work / projects
- `/about` – About the company
- `/contact` – Contact & quote request

Additionally:

- Under the hood, ensure there is a page or section that can later hold:
  - Basic Privacy Policy (can be a simple text page).
  - Basic Cookie / tracking explanation (footer link).

If these legal texts are not specified by the client, create appropriately generic, non-specific boilerplate that can be replaced later.

---

## 9. Global Layout & Components

**Header (all pages):**

- Left: Site name or simple typographic logo: “The Flooring and Resin Company”.
- Right: Main nav (Home, Services, Resin & Feature Surfaces, Previous Work, About, Contact).
- On mobile:
  - Collapsible navigation (burger menu) with accessible toggling.
- Optional but desirable:
  - Small phone/WhatsApp “Call us” / “Message us” indicator.

**Footer (all pages):**

- Company name & short descriptor:
  - “The Flooring and Resin Company – family-run flooring & resin specialists based in Ashford, Kent.”
- Registered details:
  - “THE FLOORING AND RESIN COMPANY LTD – Registered in England and Wales”
  - “Registered office: Henwood House, Henwood, Ashford, Kent, TN24 8DH”
- Service area:
  - “Working across Kent, the South East and projects across the UK.”
- Contact summary:
  - Mobile (clickable)
  - WhatsApp link
- Social icons:
  - Facebook, TikTok, LinkedIn
- Small links:
  - Privacy Policy
  - Cookies (or “Legal”)
  - Possibly “Website by Lawsons Creative” (link placeholder; URL to be added by site owner later).

**Global CTA patterns:**

- Buttons for:
  - “Request a quote”
  - “Book a call” (or similar)
- Use consistent styling and labelling.

---

## 10. Page-by-Page Specifications

### 10.1 Home (`/`)

**Purpose:**  
Introduce the company, highlight key strengths, and drive users to enquire or explore services/projects.

**Content structure:**

1. **Hero section**
   - Eyebrow: “Family-run flooring & resin specialists”
   - H1: e.g.  
     “Crafted through generations. Designed for today.”
   - Short paragraph:
     - Family-run, 50+ years’ experience.
     - Domestic & commercial.
     - Based in Ashford, working across Kent, the South East and beyond.
   - Primary CTA: “Request a quote”
   - Secondary CTA: “View our previous work”

2. **“From homes to hospitals” services overview**
   - Section showing:
     - Carpet
     - Vinyl (including cap-and-cove for hygiene spaces)
     - Laminate / engineered wood
     - Resin flooring & feature surfaces
   - Each with 1–2 sentences focusing on typical use-cases and benefits.

3. **Resin highlight strip**
   - Focused on resin as a creative differentiator:
     - Text about unique, durable finishes.
     - Surfaces beyond floors: worktops, feature walls, decorative items.
     - Mention a top-tier example like the Phoenix Passage artwork as a proof of artistic capability.
   - CTA: “Discover resin & feature surfaces” linking to `/resin-feature-surfaces`.

4. **Sectors / who they work with**
   - Cards or list for:
     - Homes
     - Care homes
     - Schools & education
     - Hospitality & leisure
     - Offices and commercial spaces

5. **Selected clients / trust strip**
   - Logos or name list: Esquires Coffee, Callaway, Häagen-Dazs, etc.
   - One line of copy emphasising trust from commercial and educational clients.

6. **Testimonials snippet**
   - Carousel or 2–3 selected quotes.
   - CTA to Contact / About if needed.

7. **“How we work” overview**
   - Short steps:
     1. Get in touch
     2. Site visit and recommendations
     3. Clear quote
     4. Professional installation with minimal disruption

8. **Final CTA band**
   - Reassuring line about working around homes, schools and busy spaces.
   - Buttons: “Request a quote” and “Message us on WhatsApp”.

---

### 10.2 Services (`/services`)

**Purpose:**  
Present the main services clearly and help visitors understand what’s possible.

**Sections:**

1. Intro
   - One paragraph summarising breadth of services.
   - Emphasise flexibility: they can supply materials or work with customer-supplied materials.

2. Service blocks (one per main service):

   **Carpet**
   - Description: contract carpets & tiles.
   - Ideal for care homes, hospitality, offices, domestic lounges/bedrooms.
   - Benefits: warmth, comfort, acoustic softness.

   **Vinyl & LVT**
   - Description: sheet vinyl, loose-lay LVT.
   - Cap-and-cove installations for hygiene-critical areas (hospitals, kitchens, wet rooms).
   - Benefits: easy to clean, durable, hygienic.

   **Laminate & Engineered Wood**
   - Description: robust, attractive wood / wood-look floors.
   - Suitable for living spaces, offices, reception areas.
   - Benefits: durable, stylish, lower maintenance than some solid wood.

   **Resin Flooring**
   - Description: resin floors for domestic and commercial spaces.
   - Benefits: seamless, hard-wearing, customisable aesthetics.
   - CTA: “See more resin work” → `/resin-feature-surfaces`.

3. “Not sure what you need?” callout
   - Suggest: they advise on the right product for each space.
   - CTA: “Request a free consultation” or “Talk to us about your project”.

---

### 10.3 Resin & Feature Surfaces (`/resin-feature-surfaces`)

**Purpose:**  
Showcase resin as their standout creative proposition.

**Sections:**

1. Hero
   - H1 focusing on resin’s creative and practical value.
   - Intro: resin for floors, worktops, feature walls and bespoke pieces.
   - Emphasise “art meets flooring”.

2. “What we can create”
   - Subsections:
     - Resin floors (domestic & commercial)
     - Worktops and counters
     - Feature walls and panels
     - Decorative items (e.g. boards, ornamentals, stair treads/doorsteps etc.)

3. Visual gallery (stub content)
   - Space designed for 6–8 thumbnail slots for resin work images.
   - For now, developer can use placeholder descriptions; actual imagery supplied later.

4. “Why resin?”
   - Bullet points:
     - Unique visuals (no two pieces the same).
     - Seamless surfaces.
     - Durable and easy to clean (within product limits).
     - Custom colours to match brand/home.

5. “Art and flooring combined”
   - Mention of notable artistic piece (Phoenix Passage 2012 in a gallery context) as a high-end example of how resin and art can merge.
   - Clarify: this demonstrates the level of creativity possible.

6. CTA section
   - Encourage consultations for resin ideas.
   - Buttons:
     - “Discuss a resin project”
     - “View previous work” (scroll to or link to `/previous-work` with resin filter in future).

---

### 10.4 Previous Work (`/previous-work`)

**Purpose:**  
Showcase example projects across domestic, commercial/education and resin categories.

**Implementation note for v1:**  
All projects are stored as static content. Developer will manually add/update projects. Design should make it easy to extend this later (e.g. projects represented as data entries rather than hard-coded in many scattered places).

**Content model per project:**

- Title
- Category: `Domestic`, `Commercial & Education`, or `Resin & Feature Surfaces`
- Location: city/area and type of client (e.g. “Residential care home, Ashford, Kent”)
- Tags (3–5): flooring type, context, constraints (e.g. “Carpet”, “Care home”, “Occupied building”)
- Short summary (2–4 sentences)
- Optional quote + attribution
- Space for 1–3 photos (when available)

**Page structure:**

1. Intro
   - Headline summarising what this page is:
     - e.g. “Floors and resin surfaces that work hard and look good”.
   - Short paragraph explaining:
     - mix of domestic and commercial projects
     - more projects to be added over time
     - invite to ask for sector-specific examples.

2. Optional filters
   - Simple category filters:
     - All
     - Domestic
     - Commercial & Education
     - Resin & Feature Surfaces
   - If filters are implemented, they can be done with lightweight client-side logic.

3. Project listing
   - Grid or list of project cards.
   - At least 4–6 example projects defined in content (developer can start with summarised examples from brief + invented-but-plausible composites until real images/details are supplied).

4. Closing note
   - Statement about ongoing updates:
     - “We’re continually adding more of our work to this page. If you’d like to see examples similar to your project, just mention it when you get in touch.”

---

### 10.5 About (`/about`)

**Purpose:**  
Tell the story: family business, experience, sectors served, and “why choose us”.

**Sections:**

1. Hero / intro
   - Reuse the “Crafted through generations. Designed for today.” line.
   - One paragraph outlining:
     - Family-run.
     - Over 50 years’ experience in the flooring industry.
     - Domestic and commercial projects.

2. The story
   - Content about:
     - George’s long experience.
     - Business founded in 2021 as The Flooring and Resin Company.
     - Katie’s involvement bringing an approachable, personal, female-led angle.
     - Family business values: care, respect for people’s homes/workplaces, reliability.

3. “From homes to hospitals” section
   - Short narrative linking domestic roots to current commercial focus.
   - Highlight sectors: homes, care homes, schools, hospitality, clubs.

4. “Why choose us?” list (4–6 bullet points)
   - 50+ years experience in flooring.
   - Family-run, personal service.
   - Comfort with both small domestic jobs and large commercial projects.
   - Flexible on materials (can supply or fit customer-supplied).
   - Public liability insurance (word generically).
   - Combination of technical precision and creative resin work.

5. Testimonials
   - 3–5 choice quotes from the review pool.

6. Soft CTA
   - Encouragement to get in touch.
   - Buttons: “Request a quote” and “Ask a question”.

---

### 10.6 Contact & Quote Request (`/contact`)

**Purpose:**  
Make it easy to enquire or request a quote, regardless of whether the visitor is domestic or commercial.

**Sections:**

1. Intro
   - Short paragraph setting expectations:
     - Friendly, no-obligation conversations.
     - They’ll respond promptly (but don’t invent exact SLAs).

2. Contact methods
   - Prominent:
     - Mobile number (tap to call).
     - WhatsApp “Message us” button (using their WhatsApp number).
   - Note that they work across Kent, the South East and UK-wide projects (where appropriate).

3. Contact / quote form  
   **Single combined form** with a switch or clear structure that covers both general enquiries and quote requests.

   **Fields:**

   - Name (required)
   - Phone (required)
   - Email (optional, but highly recommended – still treat as optional as not in brief)
   - Type of enquiry (dropdown or radio):
     - “General enquiry”
     - “Request a quote”
   - For quotes, additional fields:
     - Property type (dropdown: Home, Care home, School, Office, Hospitality/Leisure, Other)
     - Location (town/city + county)
     - Rough area to be worked on (free text, with hint e.g. “Approximate room sizes or m² if you know it”)
     - Services interested in (checkboxes: Carpet, Vinyl/LVT, Laminate/Wood, Resin flooring, Resin surfaces, Not sure)
   - Message (textarea, required).
   - Optional file upload: allow sending photos/plans (if technically straightforward; if not, mention they can WhatsApp or email photos instead).

   **Form behaviour:**

   - Client-side validation:
     - Required fields must be marked and validated.
   - Success state:
     - Clear success message on submit:
       - e.g. “Thank you, your message has been sent. We’ll be in touch as soon as we can.”
   - Failure state:
     - Clear error message with guidance.

   **Backend/email handling:**

   - Implementation detail can use:
     - A simple form service, or
     - A Vercel-friendly serverless function.
   - Ensure form handling is clearly documented in README.

---

## 11. SEO & On-Page Structure

For each main page:

- Unique, descriptive `<title>` (around 55–60 characters).
- Meta description (around 140–160 characters) summarising page purpose and including relevant keywords:
  - Flooring, resin flooring, Ashford, Kent, commercial flooring, domestic flooring, etc.
- One main `<h1>` per page, matching the page’s main topic.
- Logical heading hierarchy (`h2`, `h3`) for sections.
- Internal links between:
  - Home ↔ Services
  - Home ↔ Previous Work
  - Home & Services ↔ Resin page
  - All pages ↔ Contact.

**Schema (structured data) – v1:**

- Basic `LocalBusiness` or similar schema for The Flooring and Resin Company with:
  - Name
  - Address
  - Telephone
  - Area served (Kent, South East)
- Don’t overcomplicate in v1; implement minimal correct schema if possible.

---

## 12. Accessibility Requirements

- Semantic HTML structure for headings, landmarks (header, main, footer, nav).
- Sufficient colour contrast between text and backgrounds.
- Focus styles visible for interactive elements (links, buttons, form elements).
- Nav must be keyboard accessible:
  - Burger menu toggles from keyboard.
- All images:
  - Functional images: descriptive alt text.
  - Decorative images: empty alt attributes.
- Forms:
  - Proper `<label>` association for inputs.
  - Clear error messages and success confirmation.
- Provide a “Skip to main content” link at the top of each page.

---

## 13. Performance & UX

- Optimise images:
  - Use appropriate sizes and responsive image techniques.
  - Lazy-load non-critical images (e.g. further down the Previous Work page).
- Keep JavaScript minimal; only use where necessary.
- CSS:
  - Avoid large unused frameworks.
- Ensure pages load fast on typical mobile connections.

---

## 14. Content & Assets Required (from client / dev)

For live production readiness, the following will eventually be needed (but can be stubbed for initial build):

- Logo (if/when created).
- Real photographs of:
  - Domestic installations.
  - Care homes.
  - Schools.
  - Hospitality/commercial spaces.
  - Resin floors and feature pieces.
- Confirmation or editing of:
  - Exact wording for “Why choose us”.
  - Which testimonials to feature prominently.
- Optional:
  - Company email address for contact.
  - Precise wording for Privacy Policy / Cookies notice.

For now, the site should handle placeholder or limited real content gracefully.

---

## 15. Phase 2 (Out of Scope for v1)

Do **not** implement these yet, but design the v1 structure so they can be added later:

- Secure admin portal / CMS for:
  - Managing Previous Work projects.
  - Editing copy and imagery without developer involvement.
- Blog or articles section.
- Advanced schema markup (e.g. FAQ, project schema).

The only requirement in v1 is that project data is stored in a way that can be programmatically migrated to a CMS later (e.g. as structured data, not scattered inline).

---

## 16. Deliverables Checklist (for Claude Code)

Claude should aim to produce:

1. A fully functioning, responsive website implementing the pages and sections described.
2. A nav and footer matching the global structure above.
3. Clean, semantic HTML structure with accessible navigation and forms.
4. A consistent visual design system:
   - Colour palette
   - Type choices
   - Buttons and card styles
5. All page copy populated with the best-guess content based on this spec (ready for the client/developer to refine).
6. A structured representation of Previous Work projects suitable for future CMS migration.
7. Working contact form with:
   - Validation
   - Success/failure messages
   - Server-side handling appropriate for Vercel (documented in README).
8. README documentation:
   - How to run locally.
   - How to deploy to Vercel.
   - How to edit content, especially:
     - Services text
     - About content
     - Projects on Previous Work page
     - Contact details and social links
   - Any configuration needed for the contact form.

This completes the v1 scope for The Flooring and Resin Company’s website build.