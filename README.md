# MakeMyKoraput V3

Koraput-focused travel website prototype with destination experiences, community media links and SEO foundations.

## Important
The community section uses embeds/links to original public sources instead of copying third-party photos or posts. For Instagram/Facebook posts, use official embed tools or obtain creator permission before displaying media on the site.

## Local run
npm install
npm run dev

## Production SEO
- Replace `https://makemykoraput.com` in `robots.txt` and `sitemap.xml` with the final domain.
- Deploy the site to a public host.
- Verify the domain in Google Search Console and submit `sitemap.xml`.
- For strong search indexing, prerender or server-render destination pages such as `/deomali` and `/machkund`.

## V3.2 final prototype additions
- Deomali experience categories: viewpoints, sunrise/sunset, trekking, photography, nature, food, stays and local transport.
- Traveller feedback placeholders ready for a future verified community system.
- Planning actions designed to become real booking/enquiry flows later.

## Next production modules
- Real destination database
- Creator submission system with moderation
- Stays and partner inventory
- Local cabs/guides
- Maps
- Authentication
- Reviews
- Payments
- Admin dashboard

## Routing
- Destination pages use real paths such as `/deomali`, `/dudhari`, `/machkund`, `/onukadelli`, `/nandapur`, and `/putsil`.
- The hosting platform must support SPA fallback to `index.html` for direct destination URLs.


## Before public launch
- Replace demo images with owned/licensed Koraput photography or official embeds.
- Connect real maps, stays, cab/guide partners, authentication, reviews, moderation and payments.
- Replace the placeholder domain in robots.txt and sitemap.xml with the final live domain.
- Deploy with a production host and server/prerendered destination routes for stronger search indexing.
