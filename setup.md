# setup.md — Manual SEO Setup Checklist
## muhammadtanveerabbas.vercel.app

---

### 1. Replace Placeholder Values in Code
- [ ] `app/layout.tsx` → Confirm `@m_tanveerabbas` is your real Twitter/X handle (or replace)
- [ ] `app/layout.tsx` → Replace `REPLACE_WITH_GSC_VERIFICATION_CODE` after step 2
- [ ] `components/JsonLd.tsx` → Confirm/replace LinkedIn URL
- [ ] `components/JsonLd.tsx` → Confirm/replace Twitter handle
- [ ] `components/JsonLd.tsx` → Replace `YOUR_DEVTO_HANDLE` with real Dev.to handle

---

### 2. Google Search Console (GSC)
- Go to: https://search.google.com/search-console
- Add property → URL prefix → `https://muhammadtanveerabbas.vercel.app`
- Verify using HTML tag method → copy the `content` value
- Paste it into `metadata.verification.google` in `app/layout.tsx`
- After verification → Submit sitemap: `https://muhammadtanveerabbas.vercel.app/sitemap.xml`

---

### 3. Google Analytics 4 (GA4)
- Go to: https://analytics.google.com
- Create new property → Get Measurement ID (G-XXXXXXXXXX)
- Add to project:
  ```tsx
  // Install: pnpm add @next/third-parties
  import { GoogleAnalytics } from '@next/third-parties/google'
  // In app/layout.tsx body: <GoogleAnalytics gaId="G-XXXXXXXXXX" />
  ```

---

### 4. Bing Webmaster Tools
- Go to: https://www.bing.com/webmasters
- Add your site → Import from GSC (fastest — one click)
- Submit sitemap: `https://muhammadtanveerabbas.vercel.app/sitemap.xml`
- Uncomment the `bing` verification line in `app/layout.tsx` and add the code

---

### 5. IndexNow (Instant Indexing — Bing + Yandex)
- Go to: https://www.indexnow.org/
- Generate an API key
- Create file: `public/{your-key}.txt` with the key as content
- Ping on every new page: `POST https://api.indexnow.org/indexnow`

---

### 6. Yandex Webmaster (optional)
- Go to: https://webmaster.yandex.com
- Add site and verify via meta tag or file method

---

### 7. OG Image
- Current OG image used: `public/OG.png` (1200×630px)
- Ensure text reads: "Muhammad Tanveer Abbas | SaaS Developer & MVP Builder"
- If you want to regenerate: https://og.vercel.app or Figma

---

### 8. Social Profiles (for sameAs backlinks)
- LinkedIn: Make sure your profile is public and lists your site URL
- GitHub README: Add link to `muhammadtanveerabbas.vercel.app`
- Twitter/X bio: Add your site URL
- Dev.to / Hashnode: Add site URL in profile settings

---

### 9. Platforms to Submit / List Your Profile

| Platform              | URL                                       | Purpose                    |
|-----------------------|-------------------------------------------|----------------------------|
| Google Search Console | search.google.com/search-console          | Core indexing              |
| Bing Webmaster        | bing.com/webmasters                       | Bing/Edge traffic          |
| Yandex Webmaster      | webmaster.yandex.com                      | Minor extra coverage       |
| LinkedIn Profile      | linkedin.com                              | Google indexes LinkedIn    |
| GitHub Profile        | github.com                                | Dev authority backlink     |
| Dev.to                | dev.to                                    | Developer SEO community    |
| Hashnode              | hashnode.com                              | Blog-based SEO             |
| Indie Hackers         | indiehackers.com/profile                  | Founder community indexing |
| ProductHunt           | producthunt.com                           | SaaS visibility            |

---

### 10. Favicon
- Current icons in `/public/`: `icon.svg`, `icon-light-32x32.png`, `apple-icon.png`
- To regenerate a full set: https://realfavicongenerator.net
- Place files in `/public/`: `favicon.ico`, `favicon-16x16.png`, `apple-touch-icon.png`
- Update `icons` in `app/layout.tsx` metadata if filenames change
