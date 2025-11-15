# The Flooring and Resin Company - Website

A modern, responsive Next.js website for The Flooring and Resin Company, showcasing their flooring and resin services across Kent and the South East.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

For custom domain setup, follow [Vercel's domain documentation](https://vercel.com/docs/concepts/projects/domains).

---

## Content Editing Guide

All content is stored as structured data in the `src/content/` directory. This makes it easy to update without touching code.

### Company Information

**File:** `src/content/company.ts`

Edit company details, contact information, and social media links:

```typescript
export const company = {
  name: {
    legal: 'THE FLOORING AND RESIN COMPANY LTD',
    trading: 'The Flooring and Resin Company',
  },
  contact: {
    phone: '07974 911629',
    whatsapp: '+447933030318',
  },
  // ... more fields
};
```

### Testimonials

**File:** `src/content/testimonials.ts`

Add, edit, or remove customer testimonials:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Your testimonial text here...',
    author: 'Customer Name',
    role: 'Domestic client',
    rating: 5,
  },
  // Add more testimonials here
];
```

### Projects (Previous Work)

**File:** `src/content/projects.ts`

Add or edit project case studies:

```typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title',
    description: 'Detailed description...',
    category: 'domestic', // or 'commercial', 'care-home', 'school', 'hospitality'
    serviceType: 'resin', // or 'carpet', 'vinyl', 'laminate'
    featured: true, // Shows on homepage if true
    image: '/images/project-1.jpg', // Optional
    testimonial: 'Optional client quote...',
  },
  // Add more projects here
];
```

**Project categories:**
- `domestic` - Residential projects
- `commercial` - Commercial offices
- `care-home` - Care facilities
- `school` - Educational institutions
- `hospitality` - Restaurants, hotels, leisure

**Service types:**
- `carpet`
- `vinyl`
- `laminate`
- `resin`

### Clients

**File:** `src/content/clients.ts`

Add client names for the "Trusted By" section:

```typescript
export const clients: Client[] = [
  { name: 'Client Name', category: 'commercial' },
  // Add more clients
];
```

### Services

**File:** `src/content/services.ts`

Edit service descriptions shown on the homepage:

```typescript
export const services: Service[] = [
  {
    id: 'carpet',
    name: 'Carpet',
    slug: 'carpet',
    shortDescription: 'Brief description here...',
    icon: '🏠',
  },
  // Edit existing services
];
```

---

## Contact Form Configuration

The contact form is located in `src/components/ContactForm.tsx`.

### Current Implementation

Currently, the form is set up for development with console logging. For production, you'll need to implement form handling.

### Recommended Options

#### Option 1: Vercel Serverless Function (Recommended)

1. Create `/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';

   export async function POST(request: Request) {
     const formData = await request.json();

     // Send email using service like SendGrid, Resend, or Postmark
     // Example with Resend:
     // await resend.emails.send({
     //   from: 'website@yourdomain.com',
     //   to: 'info@tfrco.co.uk',
     //   subject: 'New Contact Form Submission',
     //   html: `...`
     // });

     return NextResponse.json({ success: true });
   }
   ```

2. Update the form submission in `ContactForm.tsx`:
   ```typescript
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

#### Option 2: Third-Party Form Service

Use services like:
- **Formspree** (formspree.io)
- **Web3Forms** (web3forms.com)
- **Netlify Forms** (if hosting on Netlify)

Simply update the form action URL in the `handleSubmit` function.

---

## Image Guidelines

### Adding Images

1. Place images in the `/public/images/` directory
2. Reference them in content files:
   ```typescript
   image: '/images/your-image.jpg'
   ```

### Image Optimization

Next.js automatically optimizes images when using the `Image` component. Recommended formats:
- **Format:** WebP or JPEG
- **Hero images:** 1920x1080px (16:9)
- **Project cards:** 800x600px (4:3)
- **Maximum file size:** 500KB per image

### Project Images

When adding real project photos:

1. Save images with descriptive names: `project-resin-kitchen-kent.jpg`
2. Add to `/public/images/projects/`
3. Update the project in `src/content/projects.ts`:
   ```typescript
   image: '/images/projects/project-resin-kitchen-kent.jpg'
   ```

---

## Page Structure

### Main Pages

- **Home** (`/`) - Hero, services overview, testimonials, projects, CTAs
- **Services** (`/services`) - Detailed service descriptions
- **Resin & Feature Surfaces** (`/resin-feature-surfaces`) - Showcase page for resin work
- **Previous Work** (`/previous-work`) - Filterable project gallery
- **About** (`/about`) - Company story and team
- **Contact** (`/contact`) - Contact form and methods
- **Privacy** (`/privacy`) - Privacy policy
- **Cookies** (`/cookies`) - Cookie policy

### Adding New Pages

1. Create a new directory in `src/app/your-page-name/`
2. Add `page.tsx`:
   ```typescript
   import { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'Your Page Title',
     description: 'Your page description...',
   };

   export default function YourPage() {
     return (
       <main id="main-content">
         {/* Your content */}
       </main>
     );
   }
   ```
3. Add navigation link in `src/components/Header.tsx`

---

## Accessibility

This website is built to WCAG 2.1 Level AA standards:

- Semantic HTML throughout
- Proper heading hierarchy (h1-h6)
- Alt text on images
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed
- Skip to main content link
- Minimum 4.5:1 color contrast ratios

---

## SEO

### Meta Tags

Each page has unique meta tags defined in its `metadata` export.

### Structured Data

Schema.org LocalBusiness structured data is automatically included on all pages via `src/components/StructuredData.tsx`.

### Sitemap

To generate a sitemap, create `src/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Add all pages
  ];
}
```

---

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Blue shades
  },
  accent: {
    // Orange shades
  },
}
```

### Typography

The site uses the Inter font from Google Fonts. To change:

1. Edit `src/app/layout.tsx`:
   ```typescript
   import { YourFont } from 'next/font/google';
   const yourFont = YourFont({ subsets: ['latin'] });
   ```

2. Apply in the layout

### Global Styles

Edit `src/app/globals.css` for:
- Heading sizes
- Button styles
- Custom utility classes

---

## Common Tasks

### Update Phone Number

Edit `src/content/company.ts`:
```typescript
contact: {
  phone: '07974 911629',
  phoneDisplay: '07974 911629',
}
```

### Add a New Testimonial

Add to `src/content/testimonials.ts`:
```typescript
{
  id: 'testimonial-new',
  quote: 'Your quote here...',
  author: 'Name',
  role: 'Role',
  rating: 5,
}
```

### Feature a Project on Homepage

In `src/content/projects.ts`, set:
```typescript
featured: true
```

### Update Social Media Links

Edit `src/content/company.ts`:
```typescript
social: {
  facebook: 'https://...',
  tiktok: 'https://...',
  linkedin: 'https://...',
}
```

---

## File Structure

```
client-flooring-and-resin-company/
├── docs/                          # Project documentation
├── public/                        # Static assets
│   └── images/                    # Images
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── cookies/
│   │   ├── previous-work/
│   │   ├── privacy/
│   │   ├── resin-feature-surfaces/
│   │   ├── services/
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Homepage
│   ├── components/                # Reusable components
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── StructuredData.tsx
│   │   └── TestimonialCard.tsx
│   └── content/                   # Structured content data
│       ├── clients.ts
│       ├── company.ts
│       ├── projects.ts
│       ├── services.ts
│       └── testimonials.ts
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## Support

For technical questions about the website:
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS documentation: https://tailwindcss.com/docs

For content updates, refer to the Content Editing Guide above.

---

## License

This website is proprietary to The Flooring and Resin Company Ltd.

**Portfolio Rights:** Lawsons Creative retains full rights to showcase this project in portfolios, marketing materials, and case studies.
