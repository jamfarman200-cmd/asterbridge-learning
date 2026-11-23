# Asterbridge Learning — zero-cost launch guide

## Included
- Responsive landing site, course offers, registration CTA, 5 study articles, enquiry form
- Google Apps Script + Google Sheet submission backend with email alerts
- Privacy notice and terms starter templates, sitemap, robots and favicon

## 1. Upload to GitHub
1. Extract the ZIP.
2. Create a free account at https://github.com if needed; create a repository (e.g. `asterbridge-learning`).
3. Upload all files in this folder to the repository root (not the folder itself). Commit.

## 2. Deploy free with Cloudflare Pages
1. Go to https://dash.cloudflare.com and sign in/create free account.
2. Workers & Pages → Create application → Pages → Connect to Git.
3. Connect GitHub and choose the repository.
4. Framework preset: None. Build command: `exit 0`. Build output directory: `.` (root). Production branch: `main`.
5. Deploy. You receive a `*.pages.dev` URL. Availability of platform features/limits may change.

## 3. Set up Google Sheets receiving backend
1. Sign into Google and create a blank Google Sheet called Asterbridge Enquiries.
2. In the sheet: Extensions → Apps Script.
3. Remove sample code; paste the contents of `google-apps-script.gs`.
4. Replace `REPLACE_WITH_YOUR_EMAIL` with the email address receiving notifications. Save.
5. In Apps Script, select Deploy → New deployment → gear/type → Web app.
6. Execute as: Me. Who has access: Anyone (the public website needs to submit; do not put sensitive data in this form). Deploy. Authorize permissions.
7. Copy the deployed web app URL ending `/exec`.
8. Edit `config.js` in your GitHub repository. Paste URL between quotes in `submissionEndpoint`. Save/commit. Cloudflare Pages auto-redeploys.
9. Test the website form. Check the Sheet row and email notification. If notification isn't delivered, check spam and Apps Script executions.

## 4. Replace site placeholders
- Change the `YOUR-SITE.pages.dev` placeholder in index.html (canonical and schema), sitemap.xml, and robots.txt to the actual deployed URL.
- Update sitemap.xml URL(s) to your actual URL. Commit.
- Replace any placeholder brand/contact info and confirm that offers, availability and delivery scope are accurate.
- Name is provisional; check business name and trademark conflicts before use.

## 5. Submit to Google Search
1. Visit https://search.google.com/search-console and sign in.
2. Choose URL-prefix property; enter exact `https://YOUR-SITE.pages.dev/` URL (replace with actual site).
3. Verify using HTML tag: Google provides a meta tag. Add it to `<head>` in index.html, commit and wait for Pages deployment; click Verify. If verification method is offered for the Pages URL, use that.
4. Search Console → Sitemaps → enter `sitemap.xml` → Submit.
5. URL Inspection → homepage URL → Test live URL → Request indexing. Repeat for privacy/terms if useful.
6. Indexing may take days or weeks and is not guaranteed; this is not paid placement.

## 6. Free visibility
- Share the pages.dev URL in relevant Canadian parent/homeschool communities only where self-promotion is allowed.
- Create accurate listings on eligible free tutoring directories; check eligibility and policies before posting.
- Consider Google Business Profile only if you meet current eligibility for an in-person or eligible service-area business. Do not use a fictitious address; an online-only tutoring business may not qualify.
- Ask clients for honest reviews only after real service; never buy or fabricate reviews.

## 7. Before taking paid students
Confirm scope, session duration, cancellation/refund terms, payment options, schedule, tutor qualifications and any applicable tax/legal obligations. Protect minors' data; guardian involvement is recommended. Privacy and terms pages are starter templates, not legal advice.

## Troubleshooting
- Website not updating: check GitHub commit and Cloudflare Pages deployment log.
- Forms fail: check URL ending `/exec`, Apps Script deployment access setting, authorization, and Sheet bound to script. After code changes, Apps Script may need a new deployment version.
- Search results not showing: verify site, submit sitemap, request indexing; indexing is not immediate.

**No paid domain, hosting, advertising or API required for this setup.** Google, Cloudflare, GitHub and Apps Script free quotas/policies can change.
