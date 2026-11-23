# Advocate K. Ravi Kiran — React + Vite Website

Premium responsive advocate profile website using React + Vite, with static prerendering for important SEO pages.

## Included

- Supplied advocate photograph copied unchanged to `public/images/advocate-profile.png`.
- Forest green, champagne gold and ivory theme.
- Responsive navigation and mobile-first hero.
- About, practice areas, courts, gallery, FAQs and contact sections.
- Seven gallery photographs from `public/images/gallery/img1.jpeg` through `img7.jpeg`.
- Click-to-call and WhatsApp enquiry form.
- Multiple SEO landing pages.
- Server-rendered static HTML at build time using ReactDOMServer.
- Per-page title, description, canonical and Open Graph metadata.
- Person JSON-LD with only supplied identity/location details.
- Generated sitemap and robots.txt.

## Requirements

- Node.js 20.19+ or Node 22/24 (Node 24 LTS recommended; Node 26 is intentionally excluded for deployment compatibility).
- npm

## Install and run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build creates static HTML pages for the configured routes in `dist/`. Important page text and metadata are present in the initial HTML response, rather than depending solely on client-side JavaScript.

## Important configuration before publishing

Edit `src/config/siteConfig.js`:

1. Replace `https://www.example.com` with the real HTTPS production domain.
2. Confirm the advocate's full professional name, alternate name, qualification, college name and practice commencement year.
3. Add an actual public office address only if verified and approved for publication.
4. Add a verified Google Business Profile / map URL only if available.

Update `public/robots.txt` with the real sitemap URL after changing the domain. Rebuild after changing the site URL.

## Images

- Profile: `public/images/advocate-profile.png`
- Gallery: `public/images/gallery/img1.jpeg` through `img7.jpeg`

Gallery images are loaded from the seven JPEG files already included in `public/images/gallery/`. To replace them, keep the same filenames or update the `gallery` array in `src/config/siteConfig.js`.

## SEO routes

- `/`
- `/advocate-k-ravi-kiran-vijayawada/`
- `/civil-lawyer-vijayawada/`
- `/criminal-lawyer-vijayawada/`
- `/bail-advocate-vijayawada/`
- `/writ-petition-advocate/`
- `/service-matter-advocate/`
- `/property-dispute-lawyer-vijayawada/`

Each route is prerendered with its own title, description, canonical URL and useful page-specific introductory content. Review each page for factual accuracy and professional-conduct compliance before publishing. Do not publish thin or repetitive pages merely to target keywords.

## Deployment notes

The included `vercel.json` runs the production build and publishes the generated `dist/` folder. The Vite configuration bundles `react-helmet-async` during SSR so the server build can resolve its named exports. The browser entry hydrates prerendered production HTML, but uses `createRoot` on the empty Vite development page.

Deploy the contents of `dist/` to a static host that supports clean URL fallback / directory index files. Configure HTTPS and ensure all routes return their prerendered `index.html` with HTTP 200. Do not redirect every route to the homepage.

After deployment:
1. Verify domain ownership in Google Search Console.
2. Submit `https://YOUR-DOMAIN/sitemap.xml`.
3. Inspect the homepage and important pages.
4. Monitor indexing and search performance.
5. Test page speed, mobile layout, metadata and structured data.

## Legal and professional notice

The website provides general professional information only, not legal advice. A website visit or enquiry does not establish an advocate-client relationship. Confirm all public claims and publication methods comply with applicable Bar Council of India rules and professional-conduct requirements.
